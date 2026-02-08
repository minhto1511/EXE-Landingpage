export interface ExcelTopic {
  slug: string;
  title: string;
  description: string;
  seoTitle: string; 
  seoKeywords: string[];
  content: {
    intro: string;
    syntax: string;
    syntaxExplain: string;
    examples: {
      title: string;
      scenario: string;
      formula: string;
      explanation: string;
    }[];
    commonErrors?: string[]; // New: List common error codes or mistakes
    notes?: string[];
  };
  related: string[];
}

export const excelTopics: ExcelTopic[] = [
  {
    slug: 'ham-vlookup',
    title: 'Hàm VLOOKUP trong Excel',
    seoTitle: 'Cách sử dụng hàm VLOOKUP trong Excel: Hướng dẫn chi tiết & Ví dụ',
    description: 'Học cách sử dụng hàm VLOOKUP để tìm kiếm dữ liệu trong bảng tính Excel. Giải thích cú pháp, ví dụ minh họa và cách sửa lỗi thường gặp.',
    seoKeywords: ['hàm vlookup', 'cách dùng vlookup', 'vlookup excel', 'tìm kiếm trong excel', 'lỗi #N/A vlookup'],
    content: {
      intro: 'Hàm VLOOKUP (Vertical Lookup) là một trong những hàm phổ biến nhất trong Excel, dùng để tìm kiếm một giá trị trong cột đầu tiên của bảng dữ liệu và trả về giá trị trong cùng hàng từ một cột khác.',
      syntax: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
      syntaxExplain: '- **lookup_value**: Giá trị bạn muốn tìm kiếm.\n- **table_array**: Vùng dữ liệu chứa giá trị cần tìm (cột đầu tiên phải chứa lookup_value).\n- **col_index_num**: Số thứ tự của cột chứa giá trị muốn lấy về (tính từ cột đầu tiên của table_array).\n- **[range_lookup]**: Tuỳ chọn. Nhập 0 (FALSE) để tìm chính xác, 1 (TRUE) để tìm gần đúng.',
      examples: [
        {
          title: 'Tìm tên sản phẩm theo mã',
          scenario: 'Bạn có bảng danh sách sản phẩm với Mã SP ở cột A và Tên SP ở cột B. Bạn muốn tìm tên của sản phẩm có mã "SP001".',
          formula: '=VLOOKUP("SP001", A2:B100, 2, 0)',
          explanation: 'Công thức tìm giá trị "SP001" trong cột A (cột 1 của vùng A2:B100). Khi tìm thấy, nó sẽ trả về giá trị ở cột B (cột 2).'
        },
        {
          title: 'Điểm số học sinh',
          scenario: 'Tìm điểm số của học sinh "Nguyễn Văn A" từ bảng điểm tổng hợp.',
          formula: '=VLOOKUP("Nguyễn Văn A", D2:F50, 3, 0)',
          explanation: 'Tìm tên "Nguyễn Văn A" trong cột D, và trả về kết quả ở cột thứ 3 tính từ D (tức là cột F).'
        }
      ],
      commonErrors: [
        '#N/A: Không tìm thấy giá trị lookup_value.',
        '#REF!: col_index_num lớn hơn số cột trong table_array.',
        'Kết quả sai: Quên chọn tham số cuối cùng là 0 (tìm chính xác).'
      ]
    },
    related: ['ham-hlookup', 'ham-xlookup', 'ham-index', 'ham-match']
  },
  {
    slug: 'ham-if',
    title: 'Hàm IF trong Excel',
    seoTitle: 'Hàm IF trong Excel: Cấu trúc, Cách dùng lồng nhau & Ví dụ',
    description: 'Hướng dẫn toàn tập về hàm IF trong Excel. Cách viết hàm IF đơn giản, hàm IF lồng nhau và kết hợp với AND/OR để xử lý logic phức tạp.',
    seoKeywords: ['hàm if', 'cách dùng hàm if', 'hàm if lồng nhau', 'hàm if nhiều điều kiện', 'excel if function'],
    content: {
      intro: 'Hàm IF cho phép bạn thực hiện so sánh logic giữa một giá trị và một giá trị dự kiến. Hàm trả về một kết quả nếu điều kiện đúng, và kết quả khác nếu điều kiện sai.',
      syntax: '=IF(logical_test, value_if_true, [value_if_false])',
      syntaxExplain: '- **logical_test**: Điều kiện bạn muốn kiểm tra (ví dụ: A1 > 10).\n- **value_if_true**: Giá trị trả về nếu điều kiện ĐÚNG.\n- **value_if_false**: Giá trị trả về nếu điều kiện SAI.',
      examples: [
        {
          title: 'Xếp loại Đậu/Rớt',
          scenario: 'Nếu điểm số (ô A2) lớn hơn hoặc bằng 5 thì "Đậu", ngược lại là "Rớt".',
          formula: '=IF(A2>=5, "Đậu", "Rớt")',
          explanation: 'Excel kiểm tra xem A2 có >= 5 không. Nếu đúng trả về chữ "Đậu", nếu sai trả về chữ "Rớt".'
        },
        {
          title: 'Tính thưởng doanh số',
          scenario: 'Nếu doanh số (B2) trên 100 triệu, thưởng 10%, ngược lại thưởng 5%.',
          formula: '=IF(B2>100000000, 10%, 5%) * B2',
          explanation: 'Kiểm tra B2 > 100 triệu. Nếu đúng lấy 10%, sai lấy 5%, sau đó nhân với chính doanh số B2 để ra tiền thưởng.'
        }
      ],
      commonErrors: [
        'Quên dấu ngoặc kép "" cho văn bản.',
        'Nhầm lẫn dấu phẩy (,) và chấm phẩy (;) tuỳ theo cài đặt máy tính.',
        'Lồng quá nhiều hàm IF gây khó đọc (nên dùng IFS hoặc VLOOKUP thay thế).'
      ]
    },
    related: ['ham-ifs', 'ham-and', 'ham-or', 'ham-vlookup']
  },
  {
    slug: 'ham-sumif',
    title: 'Hàm SUMIF trong Excel',
    seoTitle: 'Hàm SUMIF: Tính tổng có điều kiện trong Excel đơn giản nhất',
    description: 'Cách sử dụng hàm SUMIF để tính tổng các ô thoả mãn một điều kiện nhất định. Ví dụ tính tổng doanh thu theo nhân viên, mặt hàng.',
    seoKeywords: ['hàm sumif', 'tính tổng có điều kiện', 'cách dùng sumif', 'sumif excel', 'tính tổng theo điều kiện'],
    content: {
      intro: 'Hàm SUMIF dùng để tính tổng các giá trị trong một phạm vi thoả mãn điều kiện bạn xác định.',
      syntax: '=SUMIF(range, criteria, [sum_range])',
      syntaxExplain: '- **range**: Vùng các ô bạn muốn áp dụng điều kiện.\n- **criteria**: Điều kiện để tính tổng (ví dụ: ">32", "Táo", A1).\n- **[sum_range]**: Vùng các ô thực tế để tính tổng. Nếu bỏ qua, Excel sẽ tính tổng trong vùng range.',
      examples: [
        {
          title: 'Tính tổng doanh thu của "Táo"',
          scenario: 'Cột A chứa tên mặt hàng, cột B chứa doanh thu. Tính tổng doanh thu của mặt hàng "Táo".',
          formula: '=SUMIF(A:A, "Táo", B:B)',
          explanation: 'Excel tìm chữ "Táo" trong cột A. Mỗi khi tìm thấy, nó cộng giá trị tương ứng ở cột B vào tổng.'
        },
        {
          title: 'Tổng các giá trị lớn hơn 1000',
          scenario: 'Tính tổng các con số lớn hơn 1000 trong cột C.',
          formula: '=SUMIF(C:C, ">1000")',
          explanation: 'Duyệt qua cột C, nếu ô nào > 1000 thì cộng vào tổng. (sum_range được bỏ qua vì tính tổng ngay trên range).'
        }
      ],
      commonErrors: [
        'Range và Sum_range không cùng kích thước (số dòng).',
        'Điều kiện dạng chuỗi hoặc biểu thức so sánh phải đặt trong dấu ngoặc kép (ví dụ ">1000").'
      ]
    },
    related: ['ham-sumifs', 'ham-countif', 'ham-averageif']
  },
  {
    slug: 'ham-index',
    title: 'Hàm INDEX trong Excel',
    seoTitle: 'Hàm INDEX trong Excel: Cách dùng & Kết hợp MATCH nâng cao',
    description: 'Hướng dẫn sử dụng hàm INDEX để trả về giá trị tại một vị trí cụ thể trong bảng. Tuyệt chiêu kết hợp INDEX và MATCH để thay thế VLOOKUP.',
    seoKeywords: ['hàm index', 'cách dùng index', 'index match', 'tìm kiếm nâng cao', 'hàm index excel'],
    content: {
      intro: 'Hàm INDEX trả về giá trị của một ô trong bảng hoặc phạm vi, dựa trên chỉ số hàng và cột mà bạn chỉ định.',
      syntax: '=INDEX(array, row_num, [column_num])',
      syntaxExplain: '- **array**: Phạm vi ô hoặc hằng số mảng.\n- **row_num**: Chọn hàng trong mảng để trả về giá trị.\n- **[column_num]**: Chọn cột trong mảng để trả về giá trị (tùy chọn).',
      examples: [
        {
          title: 'Lấy giá trị tại ô cụ thể',
          scenario: 'Lấy giá trị ở dòng 3, cột 2 trong bảng dữ liệu A1:C10.',
          formula: '=INDEX(A1:C10, 3, 2)',
          explanation: 'Excel sẽ nhìn vào vùng A1:C10, đi xuống dòng thứ 3 và sang phải cột thứ 2 để lấy giá trị.'
        },
        {
          title: 'Lấy tên nhân viên (Kết hợp MATCH)',
          scenario: 'Tìm tên nhân viên (Cột B) khi biết Mã NV (Cột A) là "NV001".',
          formula: '=INDEX(B2:B100, MATCH("NV001", A2:A100, 0))',
          explanation: 'Hàm MATCH tìm vị trí dòng của "NV001", sau đó hàm INDEX lấy giá trị tại dòng đó trong cột B.'
        }
      ],
      commonErrors: [
        '#REF!: row_num hoặc column_num trỏ ra ngoài phạm vi array.',
        '#VALUE!: Các đối số không phải là số.'
      ]
    },
    related: ['ham-match', 'ham-vlookup', 'ham-xlookup']
  },
  {
    slug: 'ham-match',
    title: 'Hàm MATCH trong Excel',
    seoTitle: 'Hàm MATCH là gì? Cách kết hợp INDEX MATCH thay thế VLOOKUP',
    description: 'Hàm MATCH giúp tìm vị trí của một giá trị trong danh sách. Thường được sử dụng kết hợp với INDEX để tạo công thức tìm kiếm mạnh mẽ.',
    seoKeywords: ['hàm match', 'cách dùng hàm match', 'match excel', 'tìm vị trí trong excel', 'index match'],
    content: {
      intro: 'Hàm MATCH tìm kiếm một mục được chỉ định trong phạm vi ô và sau đó trả về vị trí tương đối của mục đó trong phạm vi này.',
      syntax: '=MATCH(lookup_value, lookup_array, [match_type])',
      syntaxExplain: '- **lookup_value**: Giá trị bạn muốn tìm vị trí.\n- **lookup_array**: Phạm vi ô đang được tìm kiếm.\n- **[match_type]**: 0 (Chính xác), 1 (Nhỏ hơn), -1 (Lớn hơn). Thường dùng 0.',
      examples: [
        {
          title: 'Tìm vị trí của "Táo"',
          scenario: 'Tìm xem chữ "Táo" nằm ở dòng thứ mấy trong cột A (A1:A10).',
          formula: '=MATCH("Táo", A1:A10, 0)',
          explanation: 'Nếu "Táo" ở ô A3, kết quả trả về là 3.'
        },
        {
          title: 'Tìm vị trí lương cao nhất',
          scenario: 'Tìm vị trí của mức lương 50 triệu trong danh sách lương (Cột C).',
          formula: '=MATCH(50000000, C:C, 0)',
          explanation: 'Trả về số thứ tự dòng chứa giá trị 50 triệu.'
        }
      ],
      commonErrors: [
        '#N/A: Không tìm thấy giá trị lookup_value.',
        'Kết quả sai: Quên đặt match_type là 0 để tìm chính xác.'
      ]
    },
    related: ['ham-index', 'ham-vlookup', 'ham-xlookup']
  },
  {
    slug: 'ham-xlookup',
    title: 'Hàm XLOOKUP trong Excel',
    seoTitle: 'Hàm XLOOKUP: Công thức tìm kiếm ưu việt thay thế VLOOKUP',
    description: 'Hàm XLOOKUP là phiên bản nâng cấp mạnh mẽ của VLOOKUP, cho phép tìm kiếm theo mọi hướng, mặc định tìm chính xác và xử lý lỗi dễ dàng.',
    seoKeywords: ['hàm xlookup', 'cách dùng xlookup', 'xlookup vs vlookup', 'tìm kiếm hai chiều', 'xlookup excel'],
    content: {
      intro: 'XLOOKUP là hàm tìm kiếm hiện đại nhất của Excel (Office 365, Excel 2021+), khắc phục mọi nhược điểm của VLOOKUP. Nó có thể tìm kiếm bên trái, bên phải và mặc định tìm chính xác.',
      syntax: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], ...)',
      syntaxExplain: '- **lookup_value**: Giá trị cần tìm.\n- **lookup_array**: Cột chứa giá trị cần tìm.\n- **return_array**: Cột chứa kết quả muốn lấy về.\n- **[if_not_found]**: Giá trị trả về nếu không tìm thấy (thay thế IFERROR).',
      examples: [
        {
          title: 'Tìm kiếm cơ bản (Thay VLOOKUP)',
          scenario: 'Tìm giá trị tên SP (Cột B) dựa trên Mã SP (Cột A).',
          formula: '=XLOOKUP("SP001", A:A, B:B)',
          explanation: 'Đơn giản hơn VLOOKUP rất nhiều: Tìm cái gì, ở đâu, trả về cái gì.'
        },
        {
          title: 'Xử lý khi không tìm thấy',
          scenario: 'Tìm mã "SP999", nếu không có thì hiện "Không có hàng".',
          formula: '=XLOOKUP("SP999", A:A, B:B, "Không có hàng")',
          explanation: 'Tham số thứ 4 cho phép tùy biến thông báo lỗi #N/A.'
        }
      ],
      commonErrors: [
        '#NAME?: Phiên bản Excel cũ (2019 trở về trước) không hỗ trợ XLOOKUP.',
        '#VALUE!: lookup_array và return_array không cùng kích thước.'
      ]
    },
    related: ['ham-vlookup', 'ham-index', 'ham-match']
  }
];
