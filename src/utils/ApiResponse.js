class ApiResponse {
  constructor(statusCode, data = null, message = "Successful") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode >= 200 && statusCode < 300;
  }
}

export { ApiResponse };
