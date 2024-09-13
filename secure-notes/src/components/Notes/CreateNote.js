import React, { useState, useEffect, useRef } from "react";
import Quill from "quill"; // Import Quill
import "quill/dist/quill.snow.css"; // Quill's styles
import { MdNoteAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Buttons from "../../utils/Buttons";
import toast from "react-hot-toast";

const CreateNote = () => {
  const navigate = useNavigate();
  const quillRef = useRef(null); // Reference for the Quill container
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    // Initialize Quill editor when component mounts
    const quill = new Quill(quillRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["clean"],
        ],
      },
    });

    // Listen to content change and store it in state
    quill.on("text-change", () => {
      setEditorContent(quill.root.innerHTML); // Get the HTML content
    });
  }, []);

  // Note create handler
  const handleSubmit = async () => {
    if (editorContent.trim().length === 0) {
      return toast.error("Note content is required");
    }
    try {
      setLoading(true);
      const noteData = { content: editorContent };
      await api.post("/notes", noteData);
      toast.success("Note created successfully");
      navigate("/notes");
    } catch (err) {
      toast.error("Error creating note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-74px)] p-10">
      <div className="flex items-center gap-1 pb-5">
        <h1 className="font-montserrat text-slate-800 sm:text-4xl text-2xl font-semibold">
          Create New Note
        </h1>
        <MdNoteAlt className="text-slate-700 text-4xl" />
      </div>

      <div className="h-72 sm:mb-20 lg:mb-14 mb-28">
        <div ref={quillRef} className="h-full bg-white" />
      </div>

      <Buttons
        disabled={loading}
        onClick={handleSubmit}
        className="bg-customRed text-white px-4 py-2 hover:text-slate-300 rounded-sm"
      >
        {loading ? <span>Loading...</span> : "Create Note"}
      </Buttons>
    </div>
  );
};

export default CreateNote;
