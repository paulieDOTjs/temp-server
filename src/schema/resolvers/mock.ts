export const mockLongStrings =
  `Do sit irure proident occaecat ad sit ipsum enim in enim. Sint ullamco ipsum elit excepteur laboris excepteur nostrud tempor nulla est ad voluptate irure. Est cillum labore occaecat esse mollit do id adipisicing est. Ullamco laboris adipisicing est nostrud. ### Elit consectetur id incididunt non amet occaecat Lorem ut. Deserunt commodo irure fugiat consequat. Non eiusmod commodo nostrud labore anim sunt et ex. Laboris cillum consequat dolore anim. Lorem mollit id adipisicing nulla cillum. Laborum non esse Lorem culpa ullamco magna. ### Nididunt minim quis proident ea. Pariatur cupidatat commodo duis ad commodo minim consectetur labore aliquip qui non ex. Sint proident ad aute exercitation nulla nostrud cillum officia sint. Mollit et dolore sint Lorem sit enim labore esse occaecat eu enim. ### Nostrud eu adipisicing ad voluptate nostrud. Ea in duis culpa aliquip velit deserunt commodo eiusmod elit velit. Quis proident nisi deserunt cillum nulla sit culpa ipsum labore. Pariatur sunt quis nostrud nulla laborum duis culpa veniam excepteur dolore ex. ### Nostrud ut laborum sunt laborum. Aliquip minim sit elit do occaecat sunt nostrud. Sint consequat nostrud consequat reprehenderit dolore. Culpa ex ullamco minim velit mollit cillum do aliquip amet cillum ad deserunt eu. Officia reprehenderit sit occaecat proident proident Lorem non dolore ex ullamco. ### Eu proident fugiat cillum laboris sint laborum. Duis minim pariatur reprehenderit sunt irure ad fugiat. Laborum labore Lorem commodo nisi cupidatat voluptate qui. Ut nisi nulla enim incididunt anim amet anim reprehenderit ipsum. Minim ut irure veniam eiusmod duis adipisicing veniam qui sunt id eu consequat. ### Elit exercitation est ad culpa consectetur officia proident fugiat enim. Elit aute veniam reprehenderit fugiat dolor officia mollit officia dolor nulla eu. Non consectetur ea velit commodo incididunt adipisicing aliqua incididunt. Anim consectetur qui irure sit non minim enim eiusmod ipsum non Lorem deserunt do. Qui cillum laboris esse est enim consequat exercitation consectetur veniam quis quis fugiat. Minim quis nisi voluptate officia ad eu irure eiusmod id nostrud ex aliqua cillum est. ### Do nisi incididunt adipisicing commodo elit occaecat elit nostrud ut irure. Magna minim tempor duis cillum ad enim culpa qui deserunt adipisicing occaecat. Exercitation mollit voluptate ex pariatur qui labore qui aute. Ut pariatur elit id ut cillum fugiat qui aliquip enim non non. Ea irure magna pariatur commodo voluptate consequat. Culpa amet culpa mollit tempor aliquip elit. ### Ut reprehenderit ad esse ad nostrud. Esse ullamco officia irure dolor non commodo reprehenderit. Laboris consectetur tempor fugiat tempor fugiat duis velit excepteur sint. Excepteur labore dolore ex ex magna adipisicing. Magna ea voluptate deserunt in occaecat fugiat eu adipisicing in anim quis reprehenderit qui. ### Amet velit mollit sint cillum voluptate nisi in deserunt laboris. Commodo dolor elit tempor voluptate elit officia tempor. Consectetur dolor cillum incididunt adipisicing. Reprehenderit ea proident culpa cupidatat aute deserunt magna laboris occaecat qui excepteur voluptate ea eu. Labore proident incididunt laboris ipsum et et est non amet anim aliquip ullamco eiusmod veniam. Consectetur magna ad cupidatat elit. Officia adipisicing do consequat minim laboris quis amet.`.split(
    "###"
  );

export function getRandomMockLongString() {
  const num = Math.floor(Math.random() * mockLongStrings.length);
  return mockLongStrings[num];
}

export function getRandomMockShortString() {
  const shortWords = mockLongStrings.join(" ").split(" ");
  const num = Math.floor(Math.random() * shortWords.length);
  return shortWords[num];
}

export function getRandomBoolean(percent = 50) {
  return Math.random() * 100 < percent;
}

export const imageUrl = "https://via.placeholder.com/350x150";
