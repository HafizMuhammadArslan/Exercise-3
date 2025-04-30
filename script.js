function calculateSum() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);
  
    if (isNaN(a) || isNaN(b) || isNaN(n)) {
      alert(" Please enter the valid numbers for a, b, and n.");
      return;
    }
  
    let total = 0;
    for (let i = 1; i < n; i++) {
      if (i % a === 0 || i % b === 0) {
        total += i;
      }
    }
  
    alert(`The sum of all multiples of ${a} or ${b} below ${n} is: ${total}`);
  }