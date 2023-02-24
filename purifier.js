class Purifier {
  constructor(data) {
    this.data = data;
  }

  stringifyData() {
    return JSON.stringify(this.data);
  }

  cleanseData() {
    let cleanedData = this.stringifyData()
      .replace(/§/g, ' ')
      .replace(/['"]/g, ' ')
      .replace(/\n/g, '\\n');
    return cleanedData;
  }

  purifyData() {
    let purifiedData = this.cleanseData();
    console.log('Your Data Has Been Purified:');
    console.log(purifiedData);
  }
}

let data = ``;
let purifier = new Purifier(data);
purifier.purifyData();
