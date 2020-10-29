import './styles.css';

 class CountdownTimer {
   constructor({selector, targetDate}) {
    this.intervalId = null;
    this.targetDate = targetDate;
    this.selector = selector;

    this.start();
   }
      
     start () {
        const targetDate = this.targetDate;
        
        this.intervalId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = targetDate - currentTime;
          const time = this.getTimeComponents(deltaTime); 
          this.createTimerMarkUp(time);
          }, 1000)
     }
     pad(value){
      return String(value).padStart(2, `0`);
    }
  
    getTimeComponents(time){
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
      return { days, hours, mins, secs};
    }

    createTimerMarkUp({days, hours, mins, secs}) {
   document.querySelector(`${this.selector} [data-value="days"]`).textContent = `${days}`;
   document.querySelector(`${this.selector} [data-value="hours"]`).textContent = `${hours}`;
   document.querySelector(`${this.selector} [data-value="mins"]`).textContent = `${mins}`;
   document.querySelector(`${this.selector} [data-value="secs"]`).textContent = `${secs}`;
   }
  };
 
  

  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 15, 2021'),
  });

  const secondTimer = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Jan 1, 2021'),
  });