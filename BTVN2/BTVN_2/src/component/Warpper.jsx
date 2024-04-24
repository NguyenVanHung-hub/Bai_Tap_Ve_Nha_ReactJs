import React from 'react'
import Img  from './Img';
import Tex from './Tex';
import Note from './Note';
const Warpper = () => {

    const data = [
        {
            id:1,
            img:"https://media.techmaster.vn/api/static/9479/OHDr9jc_",
            title:"Upload file trong SpringBoot sử dụng Cloudinary",
            tex:"Cloudinary là một nền tảng đám mây cung cấp giải pháp toàn diện cho việc tải lên, lưu trữ, quản lý, và tối ưu hóa tài nguyên phương tiện. Dịch vụ này hỗ trợ nhiều định dạng file khác nhau, từ hình ảnh, video đến các tài liệu phức tạp như PDF và các định dạng âm thanh.",
            view: 68,
            date: "20-04-2024"
        },
        {
            id:2,
            img:"https://media.techmaster.vn/api/static/P3QkezMU/bylkb7K0",
            title:"Tìm hiểu cách đọc file trong Java",
            tex:"Trong hướng dẫn này, chúng ta sẽ khám phá các cách khác nhau để đọc từ Tệp trong Java .",
            view: 125,
            date: "11-04-2024"
        },
        {
            id:3,
            img:"https://media.techmaster.vn/api/static/P3QkezMU/llaHV2ON",
            title:"Tìm hiểu về @Conditional trong Spring",
            tex:"Trong hướng dẫn này, chúng ta sẽ xem xét chú thích @Conditional . Nó được sử dụng để cho biết liệu một thành phần nhất định có đủ điều kiện để đăng ký hay không dựa trên một điều kiện đã xác định.",
            view: 170,
            date: "11-04-2024"
        },
        {
            id:4,
            img:"https://media.techmaster.vn/api/static/P3QkezMU/J45NMGzZ",
            title:"Enum trong Java",
            tex:"Trong bài này chúng ta sẽ tìm hiểu về Enum trong Java .",
            view: 195,
            date: "11-04-2024"
        },
        {
            id:5,
            img:"https://media.techmaster.vn/api/static/P3QkezMU/1Ls_fZ3j",
            title:"Tìm hiểu cách tạo File trong Java",
            tex:"Trong bài này chúng ta sẽ tìm hiểu về File trong Java .",
            view: 78,
            date: "20-04-2024"
        },
        {
            id:6,
            img:"https://media.techmaster.vn/api/static/P3QkezMU/llaHV2ON",
            title:"@EntityScan vs @ComponentScan",
            tex:"Trong hướng dẫn ngắn này, chúng ta sẽ thảo luận về cách sử dụng @EntityScan và @ComponentScan trong Spring, giải thích chúng được dùng để làm gì và sau đó chỉ ra sự khác biệt của chúng.",
            view: 44,
            date: "11-04-2024"
        }

    ];

    if(data.length == 0) return "Looding..."

  return (
    <>
        <div className='container '>
            <div className='row '>
                {data.map((item) =>{
                    return <div className='col-sm-4 item-col'>
                    <Img item ={item}/>
                    <Tex item ={item}/>
                    <Note item ={item}/>
                </div>
                })}
            </div>
        </div>
    </>
  )
}

export default Warpper