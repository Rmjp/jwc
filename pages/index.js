import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../public/component/Navbar.js'
import Avatar from '../public/Avatar.png'
import Rewiveavatar from '../public/rewiveavatar.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>หมอหมึก</title>
        <meta name="description" content="แม่หมอ"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div id='main' className='box center'>
        <h1>หมอหมึก</h1>
        <p>ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แห่นยำ</p>
        <a href='/'><div className='button'>
          <p>จองคิว</p>
        </div></a>
      </div>
      <div className='box clearfix' id='history'>
        <div className='image hitory'><Image alt='avatar' src={Avatar} height="200" width="200"/></div>
        <h2>ประวัติหมอหมึก</h2>
        
          หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากร ไพ่ทาโร และการดูลายมือ
        
          <br/>

          ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด

      </div>
      <div className='box clearfix' id='reviwe'>
        <h1>รีวิวจากลูกค้า</h1>
        <ul>
          <li>
            <div className='image'><Image alt='avatar' src={Rewiveavatar} height="200" width="200"/></div>
            <h2>แมททิว นักธุรกิจ</h2>
            หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ
          </li>
          <li>
            <div className='image'><Image alt='avatar' src={Rewiveavatar} height="200" width="200"/></div>
            <h2>แจ็ค นักแสดง</h2>
            ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ
          </li>
          <li>
            <div className='image'><Image alt='avatar' src={Rewiveavatar} height="200" width="200"/></div>
            <h2>น้ำใส นักศึกษา</h2>
            ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา
          </li>
        </ul>
      </div>
      <div className='box center' id='reviwes'>
        <div className='textreviwe'>
        <h1>ทำนายชะตากับหมอหมึก</h1>
        <p>สามารถจองคิวได้ตาม</p>
        <p>อีเมล: octopus_fortune@teller.com</p>
        <p>โทรศัพท์: 099 XXXX XXX</p>
        <p>และมาที่สำนักที่</p>
        <p>ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999</p>
        <p>ตามวันเวลาที่นัดไว้</p>
        <br/>
        <p>จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ</p>
        <p>10.00 - 18:30 น. พัก 12:00 - 13.00</p>
        <p>เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์</p>
        </div>
        <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7925590781438!2d100.77892491495894!3d13.73100540147423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2sKMITL%20Faculty%20of%20IT!5e0!3m2!1sen!2sth!4v1654337900020!5m2!1sen!2sth" height="400" width="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
