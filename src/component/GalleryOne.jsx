import React from 'react';
import GalleryItemBox from './GalleryItemBox';

// Images
import Image1 from '../assets/images/Measurement/img1.jpg';
import Image2 from '../assets/images/Measurement/img2.jpg';
import Image3 from '../assets/images/Measurement/img3.jpg';
import Image4 from '../assets/images/Measurement/img4.jpg';
import Image5 from '../assets/images/Measurement/img5.jpg';
import Image6 from '../assets/images/Measurement/img6.jpg';
import Image7 from '../assets/images/Measurement/img7.jpg';
import Image8 from '../assets/images/Measurement/img8.jpg';
import Image9 from '../assets/images/Measurement/img9.jpg';

const GalleryOne = () => {
  return (
    <section className='gallery'>
      <div className='gallery-wrap'>
        <GalleryItemBox
          src={Image1}
          title='תכניות לקבלת היתר בניה וטופס 4'
          titleOnHover='תכניות לקבלת היתר בניה וטופס 4'
          text=' 
          משרדנו שם לנגד עיניו מתן שירות יעיל, מקצועי ומהיר לכל הלקוחות שבונים את בתיהם. 
          אנו מציעים שירות המלווה בתהליך שכולל את כל סעיפי שירותי המדידה הנדרשים בתהליך הבניה ביניהם: ביצוע מדידה מצבית ברישוי זמין, ביצוע סימוני כלונסאות וקווי בניין, וביצוע מדידות As-made ומדידה לטופס 4. 
          '
        />
        <GalleryItemBox
          src={Image2}
          title='ביצוע מדידות אדירכליות'
          titleOnHover='ביצוע מדידות אדירכליות'
          text='  
          מדידה אדריכלית הינה מדידת בתיםו\או בניינים  קיימים והמרת המדידות לתוכניות עבודה לאדריכלים ולמתכננים השונים.
          המדידות יבוצעו בקנ"מ מותאם אישית, עם מדידת כל האלמנטים הקיימים בבניין לרבות פתחים, חלונות, קירות, מדרגות וגבהים. כמו כן ביצוע ומתן  חתכים וחזיתות למבנה. 
          '
        />
        <GalleryItemBox
          src={Image3}
          title='תמ"א 36 תכנית מתאר ארצית לתקשורת'
          titleOnHover='תמ"א 36 תכנית מתאר ארצית לתקשורת'
          text=' מדידה והכנת תכניות מתאר ארצית לתקשורת להתקנת אנטנות לתקשורים פלאפונים / צבאית .'
        />

        <GalleryItemBox
          src={Image4}
          title='מדידות לצורך מיסוי / ארנונה'
          titleOnHover='מדידות לצורך מיסוי / ארנונה'
          text=' משרדנו מתמחה במדידות לצרכי חישוב שטחים להגשה לעיריות ולצרכים אחרים.'
        />
        <GalleryItemBox
          src={Image5}
          title='תכניות לצרכי רישום'
          titleOnHover='תכניות לצרכי רישום'
          text=' משרדינו מתמחה בבצוע והכנת תכניות תצ"ר תכניות לצרכי רישום. '
        />

        <GalleryItemBox
          src={Image6}
          title='מדידה לצרכי תכנון הנדסי'
          titleOnHover='מדידה לצרכי תכנון הנדסי'
          text='מדידה מפורטת במכשירים מדויקים לצרכי תכנון הנדסי.'
        />

        <GalleryItemBox
          src={Image7}
          title='מדידות קרקעיות'
          titleOnHover='מדידות קרקעיות'
          text=" משרדינו מבצע מדידות מפורטות לצרכי תכנון עבור מתכננים, אדריכלים, מהנדסי תשתית, מדידות לצרכי ביצוע, חישוב כמויות וכד'. "
        />

        <GalleryItemBox
          src={Image8}
          title='תכנית תשריט בית משותף'
          titleOnHover='תכנית תשריט בית משותף'
          text=' החברה מבצעת תשריטים לצרכי רישום בית משותף . '
        />

        <GalleryItemBox
          src={Image9}
          title='מדידת חזיתות לצורך חישוב שטחים ותכנון אדריכלי'
          titleOnHover='מדידת חזיתות לצורך חישוב שטחים ותכנון אדריכלי'
          text=' משרדינו מבצע מדידות מפורטות לצרכי תכנון עבור מתכננים, אדריכלים, או חישוב שטחים . '
        />
      </div>
      <div className='gallery-button'>
        <button className='price-suggestion'>קבלו הצעת מחיר</button>
      </div>
    </section>
  );
};
export default GalleryOne;
