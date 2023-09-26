# AccuGPTsheet
using app script to create a simple tool to run google sheet, most plug-ins have limitation on response time, so it cannot generate long texts, if we use App Script, we can generate long text in Google Sheet.



AccuGPTsheet 使用指南
1. 簡介

AccuGPTsheet 是一款能夠在 Google Sheets 中直接調用 GPT-3.5 Turbo API 的工具。您可以輕鬆地為某一列的所有內容取得相應的回應，或是為當前選中的單一儲存格取得回應。

2. 安裝與設定
   
    a. Script 編輯器
    首先，打開您的 Google Sheets，然後點擊上方的 附加元件 > Apps Script 以開啟 Google Apps Script 編輯器。
    
    b. 貼上 script
    在 script 編輯器中，刪除所有預設的程式碼，然後將提供的 "AccuGPTsheet" script 完整複製並貼上。(main.js)
    
    c. 設定 API 金鑰
    在 script 中找到 'YOUR_OPENAI_API_KEY'，並將其替換為您的實際 OpenAI API 金鑰。
    
    d. 儲存並離開
    點擊編輯器上方的 檔案 > 儲存，然後關閉 script 編輯器。

3. 使用方法
    
    a. 啟動工具
    重新載入或打開您的 Google Sheets 文件，您應該可以在選單欄中看到名為 "AccuGPTsheet" 的新選單。
    
    b. 取得單一回應
    在工作表的 A 列選擇您想查詢的儲存格。
    點擊 "AccuGPTsheet" 選單，然後選擇 Get Single Response。
    您將在相應的 B 列儲存格中看到 GPT-3.5 Turbo 的回應。
   
    c. 批次取得回應
    在 A 列填入您想查詢的內容。
    點擊 "AccuGPTsheet" 選單，選擇 Batch Update Responses。
    工具將為 A 列的每一行取得回應，並在 B 列填入相應的回應。



AccuGPTsheet User Guide
1. Introduction
AccuGPTsheet is a tool designed to directly invoke the GPT-3.5 Turbo API within Google Sheets. With this tool, you can effortlessly obtain responses for all content in a column or get a response for a single cell you've selected.

2. Installation and Setup


    a. Script Editor
    First, open your Google Sheets and then click on Extensions > Apps Script to launch the Google Apps Script editor.
    
    b. Pasting the Script
    Within the script editor, erase any default code present. Then, copy and paste the entirety of the provided "AccuGPTsheet" script.(main.js)
    
    c. Setting up the API Key
    In the script, locate 'YOUR_OPENAI_API_KEY' and replace it with your actual OpenAI API key.
    
    d. Save and Exit
    Click on File > Save at the top of the editor and then close the script editor.

3. How to Use


    a. Launching the Tool
    Reload or open your Google Sheets document, and you should see a new menu titled "AccuGPTsheet" in the menu bar.
    
    b. Obtaining a Single Response
    In the worksheet, select the cell in column A that contains the content you want to query.
    Click on the "AccuGPTsheet" menu and select Get Single Response.
    You will see the GPT-3.5 Turbo response filled into the corresponding cell in column B.
    
    c. Batch Retrieval of Responses
    Fill column A with the content you wish to query.
    Click on the "AccuGPTsheet" menu and select Batch Update Responses.
The tool will fetch responses for each row in column A and populate the corresponding cells in column B.
