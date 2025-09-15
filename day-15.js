function hasUniqueWindow(pages, k) {
  for (let i = 0; i <= pages.length - k; i++) {
    let set = new Set();
    let unique = true;

    // check k elements starting from i
    for (let j = 0; j < k; j++) {
      let page = pages[i + j];
      if (set.has(page)) {
        unique = false; // duplicate found
        break;
      }
      set.add(page);
    }

    if (unique) {
      return true; // found at least one valid window
    }
  }
  return false; // no window worked
}

// Test
let pages = ["home", "about", "products", "home", "cart", "checkout"];
let k = 3;
console.log(hasUniqueWindow(pages, k)); // true
