/**
 * Google Apps Script – Xerodirt Booking Sheet
 * 
 * SHEET COLUMNS (in order):
 * A: Name
 * B: Phone
 * C: Address
 * D: status       (default: "Pending")
 * E: Date
 * F: Slot
 * G: Service
 * H: TimeStamp    (auto-generated server timestamp)
 * I: status       (duplicate column – left blank or mirrors column D)
 *
 * DEPLOYMENT STEPS:
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Delete any existing code, paste this entire script
 * 3. Click Deploy → New deployment
 * 4. Select type: "Web app"
 * 5. Set "Execute as" → Me
 * 6. Set "Who has access" → Anyone
 * 7. Click Deploy, authorize when prompted
 * 8. Copy the Web app URL and paste it into your SCRIPT_URL in page.js
 */

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const SHEET_NAME = "Sheet1"; // Change this if your sheet tab has a different name
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Handles POST requests from the Next.js booking page.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "Sheet not found: " + SHEET_NAME }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Format the date from YYYY-MM-DD to a readable format (e.g., 2026-04-30)
    const bookingDate = data.date || "";

    // Server-side timestamp
    const timeStamp = new Date();
    const formattedTimeStamp = Utilities.formatDate(timeStamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

    // Append a new row matching the sheet schema:
    // Name | Phone | Address | status | Date | Slot | Service | TimeStamp | status
    sheet.appendRow([
      data.name     || "",          // A: Name
      data.phone    || "",          // B: Phone
      data.address  || "",          // C: Address
      data.status   || "Pending",   // D: status
      bookingDate,                  // E: Date
      data.slot     || "",          // F: Slot
      data.service  || "",          // G: Service
      formattedTimeStamp,           // H: TimeStamp
      data.status   || "Pending"    // I: status (duplicate column)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Booking saved" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (optional – useful for testing).
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Xerodirt Booking Script is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}
