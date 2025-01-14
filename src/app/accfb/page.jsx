import Link from 'next/link';

export default async function Accfb() {

  let data = await fetch('https://apifb.myad-dev.com/get')
  let products = await data.json()
  
  return (
    <>
<head>
  

  <title>บริการจำหน่ายเฟสบุ๊คเขียว 2บรรทัด 3บรรทัดสำหรับยิงแอดโฆษณา
  </title>
  <meta name="title" content="บริการจำหน่ายเฟสบุ๊คเขียว 2บรรทัด 3บรรทัดสำหรับยิงแอดโฆษณา " />
  <meta name="description" content="เฟสบุ๊ค เขียว 2 บรรทัด 3 บรรทัด สำหรับทำโฆษณาผ่านการยืนยันตัวตนแล้วทั้งหมดพร้อมส่งทันที" />
  
   
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.myad-dev.com/" />
  <meta property="og:title" content="บริการจำหน่ายเฟสบุ๊คเขียว 2บรรทัด 3บรรทัดสำหรับยิงแอดโฆษณา" />
  <meta property="og:description" content="เฟสบุ๊คเขียว 2 บรรทัด 3 บรรทัด สำหรับทำโฆษณาผ่านการยืนยันตัวตนแล้วทั้งหมดพร้อมส่งทันที" />
  <meta property="og:image" content="https://www.myad-dev.com/logo.png" />
  
   
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.myad-dev.com/" />
  <meta property="twitter:title" content="บริการจำหน่ายเฟสบุ๊คเขียว 2บรรทัด 3บรรทัดสำหรับยิงแอดโฆษณา" />
  <meta property="twitter:description" content="เฟสบุ๊คเขียว 2 บรรทัด 3 บรรทัด สำหรับทำโฆษณาผ่านการยืนยันตัวตนแล้วทั้งหมดพร้อมส่งทันที" />
  <meta property="twitter:image" content="https://www.myad-dev.com/logo.png" />
  <meta name="robots" content="index" />
  <link rel="canonical" href="https://www.myad-dev.com" />
  </head>
  




<div className="container">
  {products.map((product) => (
    <div key={product.id} className="homebox">
      <div className="box">
        <div className="boximg">
          <img 
            src="/img/fblogo.png" 
            width={100} 
            className="img-fluid rounded-start" 
            alt="fblogo"
          />
        </div>
        <div className="boxx text-center">
          <div className="title h2">{product.titel}</div>
          <div className="name h4">{product.name}</div>
        </div>
        <div className="btns">
          <Link className="btn btn-info" href={`https://line.myads.dev`}>ตกลง</Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}
