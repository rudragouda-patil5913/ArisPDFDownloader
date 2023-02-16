import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import aris from "../src/images/aris.jpg";
import BarChart from "./Barchart";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
 
  //fetching a data from mock api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((content) => setData(content));
  }, []);

  const onButtonClick = () => {
    var doc = new jsPDF();
    const tableCol = ["Id", "Name", "UserName", "Phone"];
    const tableRow = [];
    data.forEach(function (item, i) {
      const tdata = [item.id, item.name, item.username, item.phone];

      tableRow.push(tdata);
    });
    doc.autoTable(tableCol, tableRow, { startY: 20 });
    doc.addPage();
    doc.addImage(aris, "PNG", 30, 20, 150, 150);
    doc.addPage();
    const input = document.querySelector("#bar-chart");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 0, 30, 200, 150);
      doc.save("New.pdf");
    });
  };
  return (
    <div>
      <center>
        <button onClick={onButtonClick}>Download PDF</button>       
        <BarChart /> 
      </center>
    </div>
  );
};

export default App;
