export class Counter {
   private counter: number = 0;

   toggleState(): boolean {
      this.counter--;
      return this.getState();
   }

   getState(): boolean {
      return this.counter % 2 === 0;
   }
}