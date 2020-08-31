import React from 'react';
import projects from '../assets/images/Introduction/projects.png';
import three from '../assets/images/Introduction/3d.png';
import plan from '../assets/images/Introduction/plan.png';
import drone from '../assets/images/Introduction/drone.png';

const introduction = () => {
  return (
    <section className='introduction container'>
      <div className='title'>
        <h1>מה אנחנו יודעים לעשות הכי טוב</h1>
        הייתי משנה ל:מה אנחנו עושים הכי טוב?
        <p>
          משרדינו מבצע את כל סוגי המדידות ומספק שירותים לרשויות מקומיות,
          לקבלנים, לאדריכלים ולמודדים. עובדים בדיוק רב ובמהירות מרשימה ובתוך כך,
          מעניקים ללקוחות את כל הדרוש להם.
        </p>
      </div>
      <div className='logos'>
        <div>
          <img src={drone} alt='drones and airplane scanning' />
          <span>רחפנים - מדידה/צילום אוויר</span>
        </div>
        <div>
          <img src={plan} alt='making plans' />
          <span>הכנת תוכניות</span>
        </div>
        <div>
          <img src={three} alt='3d dimensions scan' />
          <span>סריקות ומידול תלת מימדי</span>
        </div>
        <div>
          <img src={projects} alt='projects' />
          <span>ליווי וביצוע פרויקטים</span>
        </div>
      </div>
      <div>
        <button className='price-suggestion'>קבלו הצעת מחיר</button>
      </div>
    </section>
  );
};
export default introduction;
