/**
 * Gemini API Service - Next.js Compatible (Mock Mode)
 */

// ... (Interface definitions stay here)

// ... (API key helper functions stay here)

export interface FormulaResponse {
  formula: string;
  explanation: string;
  example?: string;
}

export interface Step {
  title: string;
  description: string;
  details: string[];
  tips?: string;
  warning?: string;
}

export interface StepByStepResponse {
  steps: Step[];
  taskName: string;
}

export async function generateExcelFormula(prompt: string): Promise<FormulaResponse> {
  // Mock artificial delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const lowerPrompt = prompt.toLowerCase();
  
  if (lowerPrompt.includes('tổng') || lowerPrompt.includes('sum')) {
    return {
      formula: "=SUM(A:A)",
      explanation: "Hàm SUM cộng tất cả các số trong dải ô được chọn. Đây là cách nhanh nhất để tính tổng cột.",
      example: "=SUM(B2:B50)"
    };
  }

  if (lowerPrompt.includes('vlookup') || lowerPrompt.includes('tìm')) {
    return {
      formula: "=VLOOKUP(H2, A:B, 2, FALSE)",
      explanation: "Tìm kiếm giá trị H2 trong cột đầu tiên của bảng A:B và trả về giá trị ở cột thứ 2. FALSE đảm bảo tìm kiếm chính xác.",
      example: "=VLOOKUP(\"Apple\", A2:B10, 2, 0)"
    };
  }

  if (lowerPrompt.includes('họ tên') || lowerPrompt.includes('tên')) {
    return {
      formula: "=RIGHT(A2,LEN(A2)-FIND(\"*\",SUBSTITUTE(A2,\" \",\"*\",LEN(A2)-LEN(SUBSTITUTE(A2,\" \",\"\")))))",
      explanation: "Công thức này tìm khoảng trắng cuối cùng trong chuỗi ở ô A2 để trích xuất phần Tên (Last Name).",
      example: "Trần Văn An -> An"
    };
  }

  if (lowerPrompt.includes('thuế') || lowerPrompt.includes('tncn')) {
    return {
      formula: "=MAX(0, (A2-11000000)*0.05)",
      explanation: "Công thức tính thuế TNCN bậc 1 (5%) cho phần thu nhập vượt quá mức giảm trừ gia cảnh 11 triệu đồng.",
      example: "Thu nhập 15tr -> Thuế 200k"
    };
  }

  if (lowerPrompt.includes('so sánh') || lowerPrompt.includes('khác')) {
    return {
      formula: "=IF(ISERROR(MATCH(A2, B:B, 0)), \"Chỉ có ở cột A\", \"Trùng\")",
      explanation: "Kiểm tra xem giá trị ở ô A2 có tồn tại trong cột B hay không bằng hàm MATCH và IF.",
      example: "Dùng để lọc danh sách khách hàng mới."
    };
  }

  if (lowerPrompt.includes('trắng') || lowerPrompt.includes('trim')) {
    return {
      formula: "=TRIM(CLEAN(A2))",
      explanation: "Hàm TRIM xóa các khoảng trắng thừa ở hai đầu và giữa các từ. CLEAN loại bỏ các ký tự không in được.",
      example: "\"  Excel  \" -> \"Excel\""
    };
  }

  return {
    formula: "=IF(A1>10, \"OK\", \"Chưa đạt\")",
    explanation: "Đây là một công thức mẫu sử dụng hàm IF để kiểm tra điều kiện. Bạn có thể mô tả chi tiết hơn để nhận công thức chính xác.",
    example: "=IF(B2>=5, \"Đậu\", \"Trượt\")"
  };
}

export async function generateStepByStep(task: string): Promise<StepByStepResponse> {
  // Mock artificial delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    taskName: task,
    steps: [
      {
        title: "Chuẩn bị dữ liệu",
        description: "Đảm bảo bảng dữ liệu của bạn sạch sẽ và được định dạng đúng.",
        details: [
          "Xóa các dòng trống không cần thiết",
          "Kiểm tra định dạng số và ngày tháng",
          "Đặt tên tiêu đề cho các cột"
        ],
        tips: "Nên sử dụng phím tắt Ctrl + Shift + L để lọc dữ liệu nhanh."
      },
      {
        title: "Thực hiện tính toán",
        description: "Áp dụng công thức hoặc công cụ phù hợp cho task.",
        details: [
          "Chọn ô muốn hiển thị kết quả",
          "Nhập công thức AI đã gợi ý",
          "Kéo fill handle để áp dụng cho toàn bộ cột"
        ],
        tips: "F4 là phím tắt thần thánh để cố định dải ô ($)."
      },
      {
        title: "Kiểm tra kết quả",
        description: "Xác nhận lại một lần nữa để tránh sai sót.",
        details: [
          "Spot check một vài dòng ngẫu nhiên",
          "Sử dụng công cụ Filter để kiểm tra các giá trị bất thường",
          "Lưu file trước khi gửi đi"
        ],
        warning: "Hãy cẩn thận với các dải ô bị ẩn!"
      }
    ]
  };
}
