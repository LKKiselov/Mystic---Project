// Generate Random number

const randNumber = (num) => {
  return Math.floor(Math.random() * num);
};
// Generate random fortune return on mouseover
const askMystic = () => {
  let randomFortune =
    fortuneData.fortune[randNumber(fortuneData.fortune.length)];
  let randomLocation =
    fortuneData.location[randNumber(fortuneData.location.length)];
  let randomMonth = fortuneData.month[randNumber(fortuneData.month.length)];
  updateFortune = `${randomFortune} ${randomLocation} in ${randomMonth}`;
  document.getElementById("fortune-text").innerHTML = updateFortune;
};

const fortuneData = {
  fortune: [
    `You will find the love of your life in`,
    `Don't go to`,
    `Bring umbrella to`,
    `Don't take a taxi in`,
    `Avoid going to`,
    `Date the 3rd person you meet in`,
    `Something nice will happen to you in`,
    `You will meet important person in`,
    `You will find something extraordinary in`,
  ],
  location: [
    `London`,
    `NY`,
    `Paris`,
    `Istanbul`,
    `Berlin`,
    `Tokyo`,
    `Sydney`,
    `Rome`,
    `Moscow`,
    `Beijing`,
    `Seoul`,
    `Mexico City`,
    `Cape Town`,
    `Sao Paulo`,
    `Lagos`,
    `Buenos Aires`,
    `Cairo`,
    `Kinshasa`,
    `New York City`,
    `London`,
    `Paris`,
    `Istanbul`,
    `Berlin`,
    `Tokyo`,
    `Sydney`,
    `Rome`,
    `Moscow`,
    `Beijing`,
    `Seoul`,
    `Mexico City`,
    `Cape Town`,
    `Sao Paulo`,
    `Lagos`,
    `Buenos Aires`,
    `Cairo`,
    `Kinshasa`,
    `New York City`,
  ],
  month: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
};
