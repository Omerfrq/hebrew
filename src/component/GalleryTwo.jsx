import React from 'react';
import GalleryItemBox from './GalleryItemBox';
//  Images
import Image1 from '../assets/images/3d/page2img1.png';
import Image2 from '../assets/images/3d/page2img2.png';
import Image3 from '../assets/images/3d/page2img3.png';
import Image4 from '../assets/images/3d/page2img4.png';
import Image5 from '../assets/images/3d/page2img5.png';
import Image6 from '../assets/images/3d/page2img6.png';
import Image7 from '../assets/images/3d/page2img7.png';
import Image8 from '../assets/images/3d/page2img8.png';
import Image9 from '../assets/images/3d/page2img9.png';

const GalleryTwo = () => {
  return (
    <section className='gallery'>
      <div className='gallery-wrap'>
        <GalleryItemBox
          src={Image1}
          titleOnHover='מכשיר סריקה המתקדם
          TRIMBLE SX10 ב'
          text="מכשיר סריקה המתקדם בעולם TRIMBLE SX10
           יכולת סריקה מדויקת עד ל-1000 מ' בדיוק של 0.001
           התוצר קבלת ענן נקודות המשמש לכל מטרה קשור למערכת הגיאודטית הארצית "
        />
        <GalleryItemBox
          src={Image2}
          titleOnHover='ביצוע מדידות אדריכליות'
          text='  משרדנו שם לנגד עיניו מתן שירות יעיל, מקצועי ומהיר לכל הלקוחות
          שבונים את בתיהם. אנו מציעים שירות המלווה בתהליך שכולל את כל
          סעיפי שירותי המדידה הנדרשים בתהליך הבניה ביניהם: ביצוע מדידה
          מצבית ברישוי זמין, ביצוע סימוני כלונסאות וקווי בניין, וביצוע
          מדידות made-As ומדידה לטופס 4.'
        />
        <GalleryItemBox
          src={Image3}
          titleOnHover='סריקת תלת מימד'
          text='לשימור גשר מורדי הגטאות'
        />

        <GalleryItemBox
          src={Image4}
          titleOnHover='מדידות לצורך מיסוי / ארנונה'
          text=' משרדנו שם לנגד עיניו מתן שירות יעיל, מקצועי ומהיר לכל הלקוחות
                שבונים את בתיהם. אנו מציעים שירות המלווה בתהליך שכולל את כל
                סעיפי שירותי המדידה הנדרשים בתהליך הבניה ביניהם: ביצוע מדידה
                מצבית ברישוי זמין, ביצוע סימוני כלונסאות וקווי בניין, וביצוע
                מדידות made-As ומדידה לטופס 4.'
        />
        <GalleryItemBox
          src={Image5}
          titleOnHover='DJI METRIC 200+ Base stasion רחפן לצילום'
          text='הרחפן היחיד בעולם בעל יכולת הטסה גם בגשם רזולוציית צילום: 80 מגה פיקסל 
          זום עד ל- 100 - רישיון הטסה ומפעיל אווירי העונה לדרישות רשות התעופה 
          התוצאה: צילום אוויר מדויק וענן נקודות המשמש לכל מטרה'
        />

        <GalleryItemBox
          src={Image6}
          titleOnHover='צילום אוויר וסריקה ע"י רחפנים וסורקים'
          text='לצרכי מדידות וסריקות בחריגות בניה'
        />

        <GalleryItemBox
          src={Image7}
          titleOnHover='צילום אוויר ברזולוציה גבוהה'
          text='צילומי אוויר ע"י רחפנים ומטוסים מיוחדים עם מצלמות באיכות 4K לצרכים הנדסיים. '
        />

        <GalleryItemBox
          src={Image8}
          titleOnHover='תצלום אוויר באמצעות רחפן'
          text='בית מלון בטבריה '
        />

        <GalleryItemBox
          src={Image9}
          titleOnHover='סריקת תלת מימד'
          text='סריקה לקיר תומך'
        />
      </div>
      <div className='gallery-button'>
        <button className='price-suggestion'>קבלו הצעת מחיר</button>
      </div>
    </section>
  );
};
export default GalleryTwo;
