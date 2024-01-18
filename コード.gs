
function calculateAveragesAndPercentage() {
  // スプレッドシートのアクティブなシートを取得
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // データの範囲を指定（E列とF列）
  var dataRange = sheet.getRange("E2:F15");

  // データを取得
  var dataValues = dataRange.getValues();

  // コメント数とブックマーク数の合計を初期化
  var totalComments = 0;
  var totalBookmarks = 0;

  // 各行のコメント数とブックマーク数を合計
  for (var i = 0; i < dataValues.length; i++) {
    totalComments += parseInt(dataValues[i][0]);
    totalBookmarks += parseInt(dataValues[i][1]);
  }

  // コメント数とブックマーク数の平均を計算
  var averageComments = totalComments / dataValues.length;
  var averageBookmarks = totalBookmarks / dataValues.length;

  // コメント数対ブックマーク数のパーセンテージを計算
  var percentage = (averageComments / averageBookmarks) * 100;

  // 結果を表示
  Logger.log("コメント数の平均: " + averageComments);
  Logger.log("ブックマーク数の平均: " + averageBookmarks);
  Logger.log("コメント数対ブックマーク数のパーセンテージ: " + percentage + "%");
}