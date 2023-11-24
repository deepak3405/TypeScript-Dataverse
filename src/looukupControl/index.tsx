import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <>
            <h1>fhiv Kumar</h1>
        </>
    );
};

const root1 = document.querySelector("#root");
if (!root1) throw new Error("Can not find root element");
const root = createRoot(root1);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
