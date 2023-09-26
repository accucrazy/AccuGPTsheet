// AccuGPTsheet

// Function to create a custom menu in Google Sheets when the document is opened
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('AccuGPTsheet')
      .addItem('Get Single Response', 'getSingleResponse')
      .addItem('Batch Update Responses', 'batchUpdateResponses')
      .addToUi();
}

// Function to display a modal dialog with a loading message
function displayLoadingDialog() {
  var htmlOutput = HtmlService.createHtmlOutput('<p>Loading... Please wait.</p>')
                               .setWidth(250)
                               .setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Fetching Response');
}

// Function to fetch a response from the GPT-3.5 Turbo 16k API
function callGPT3Turbo16kAPI(query) {
  try {
    var apiKey = 'YOUR_OPENAI_API_KEY';  // Replace with your OpenAI API key
    var apiEndpoint = 'https://api.openai.com/v1/chat/completions';

    var headers = {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    };
    
    var payload = {
      "model": "gpt-3.5-turbo-16k",
      "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": query}
      ],
      "max_tokens": 3000
    };
    
    var options = {
      "method": "POST",
      "headers": headers,
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true
    };
    
    var response = UrlFetchApp.fetch(apiEndpoint, options);
    var jsonResponse = JSON.parse(response.getContentText());
    
    if (jsonResponse.choices && jsonResponse.choices.length > 0) {
      return jsonResponse.choices[0].message.content;
    } else {
      Logger.log("API Response Error: " + JSON.stringify(jsonResponse));
      return "Error: Unable to fetch response";
    }
  } catch (error) {
    Logger.log("Error in callGPT3Turbo16kAPI: " + error.toString());
    return "Error: " + error.toString();
  }
}

// Function to fetch a response for the content of the cell currently selected by the user
function getSingleResponse() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cellValue = sheet.getActiveCell().getValue();
  
  if (cellValue) {
    // Show the loading dialog
    displayLoadingDialog();
    
    // Fetch the response
    var response = callGPT3Turbo16kAPI(cellValue);

    // Close the loading dialog after a short delay
    Utilities.sleep(2000);  // 2 seconds delay
    SpreadsheetApp.getUi().alert('Done!');
    
    // Update the B column with the response
    sheet.getRange(sheet.getActiveCell().getRow(), 2).setValue(response);
  }
}

// Function to process all rows in column A in batch and updates column B with the responses
function batchUpdateResponses() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var columnA = sheet.getRange("A:A").getValues();
  var responses = [];

  // Show the loading dialog
  displayLoadingDialog();
  
  for (var i = 0; i < columnA.length; i++) {
    var query = columnA[i][0];
    if (query) {
      responses.push([callGPT3Turbo16kAPI(query)]);
    } else {
      responses.push([""]);  // Empty response for empty queries
    }
  }
  
  // Close the loading dialog after a short delay
  Utilities.sleep(2000);  // 2 seconds delay
  SpreadsheetApp.getUi().alert('Batch update complete!');
  
  sheet.getRange(1, 2, responses.length, 1).setValues(responses);
}
