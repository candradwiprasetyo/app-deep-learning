"use client";

import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/webpack";
import SideNavbar from "@/components/SideNavbar";
import Navbar from "@/components/Navbar";
import { TextItemType } from "@/types";
import {
  ContentType,
  HandleInputChangeType,
  HandleSubmitType,
  HandleDrop,
  ExtractTextFromPdfType,
} from "@/types";
import ContentViewer from "@/components/ResultReport/ContentViewer";
import ContentChat from "@/components/ResultReport/ContentChat";
import Form from "@/components/Form";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

export default function CreateDocument() {
  const [contents, setContents] = useState<ContentType>([
    {
      title: "",
      description: "",
      file: null,
      pdfText: "",
      fileValidation: false,
    },
  ]);

  const [showResults, setShowResults] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleDrop: HandleDrop = (acceptedFiles, index) => {
    const updatedContents = [...contents];
    if (acceptedFiles[0]?.type === "application/pdf") {
      updatedContents[index].file = acceptedFiles[0];
      updatedContents[index].fileValidation = false;
    } else {
      updatedContents[index].fileValidation = true;
    }
    setContents(updatedContents);
  };

  const handleAddContent = () => {
    setContents([
      ...contents,
      {
        title: "",
        description: "",
        file: null,
        pdfText: "",
        fileValidation: false,
      },
    ]);
  };

  const handleRemoveFile = (index: number) => {
    const updatedContents = [...contents];
    updatedContents[index].file = null;
    updatedContents[index].pdfText = "";
    setContents(updatedContents);
  };

  const handleInputChange: HandleInputChangeType = (e, index, field) => {
    if (index >= 0 && field) {
      const updatedContents = [...contents];
      updatedContents[index] = {
        ...updatedContents[index],
        [field]: e.target.value,
      };
      setContents(updatedContents);
    }
  };

  const handleSubmit: HandleSubmitType = (e) => {
    e.preventDefault();
    setShowResults(false);
    let errCount = 0;
    for (const [index, content] of contents.entries()) {
      if (!content.file) {
        const updatedContents = [...contents];
        updatedContents[index].fileValidation = true;
        setContents(updatedContents);
        errCount++;
      }
    }
    if (errCount) {
      return;
    }
    contents.forEach((content, index) => {
      if (content.file) {
        extractTextFromPdf(content.file, index);
      }
    });

    setIsFormVisible(false);
    setShowResults(true);
  };

  const extractTextFromPdf: ExtractTextFromPdfType = (file, index) => {
    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const typedArray = new Uint8Array(event.target?.result as ArrayBuffer);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      const numPages = pdf.numPages;
      let textContent = "";

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const text = await page.getTextContent();

        text.items.forEach((item) => {
          if ((item as TextItemType).str) {
            textContent += (item as TextItemType).str + " ";
          }
        });
      }

      const updatedContents = [...contents];
      updatedContents[index].pdfText = textContent;
      setContents(updatedContents);
    };
    fileReader.readAsArrayBuffer(file);
  };

  const handleUploadAgain = () => {
    setContents([{ title: "", description: "", file: null, pdfText: "" }]);
    setShowResults(false);
    setIsFormVisible(true);
  };

  return (
    <div className="flex w-full h-screen">
      <SideNavbar />
      <div className="flex-grow flex flex-wrap ml-[68px]">
        <div className="flex flex-col w-full">
          <Navbar
            title={"Report Helper"}
            label={"Draft"}
            isShowBackButton={showResults}
            isShowNavigation={true}
            navigationUrl="/"
            backButtonOnClick={handleUploadAgain}
          />
          <div className="w-full h-full bg-tertiary text-sm">
            {isFormVisible ? (
              <div className="px-8 py-[18px]">
                <Form
                  contents={contents}
                  handleSubmit={handleSubmit}
                  handleInputChange={handleInputChange}
                  handleRemoveFile={handleRemoveFile}
                  handleDrop={handleDrop}
                  handleAddContent={handleAddContent}
                />
              </div>
            ) : (
              showResults && (
                <div className="flex flex-col md:flex-row">
                  <ContentViewer contents={contents} />
                  <ContentChat />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
