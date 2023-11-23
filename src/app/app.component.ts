import { Component, OnInit } from '@angular/core';
import { fromEvent, map, mergeMap, of, scan, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-101-day-3';

  // count = 0;

  ngOnInit(): void {
    // document.addEventListener('click', () => console.log('Clicked!'));
    // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
    // document.addEventListener('click', () =>
    //   console.log(`Clicked ${this.count++}`)
    // );
    const subscription = fromEvent(document, 'click')
      .pipe(
        // operadores
        throttleTime(1000),
        mergeMap((event: any) => of(event.clientX)),
        scan((count, clientX) => count + clientX, 0)
      )
      .subscribe({
        next: (count) => console.log(`Clicked ${count}`),
        complete: () => {
          console.log('observable cerrado');
        },
      });

    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(`Clicked ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });

    // let count = 0;
    // const rate = 1000;
    // let lastClick = Date.now() - rate;
    // document.addEventListener('click', (event) => {
    //   if (Date.now() - lastClick >= rate) {
    //     debugger;
    //     count += event.clientX;
    //     console.log(count);
    //     lastClick = Date.now();
    //   }
    // });
  }
}
