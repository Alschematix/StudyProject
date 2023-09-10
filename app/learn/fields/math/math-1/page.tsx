import Element from "../../components/Element";

const contributors: string[][] = [
  [
    "Rowdy Despot",
    "2023/07/21",
    "Mathematics",
    "BASIC MATH SKILLS FFS",
    "<div class=' flex items-center justify-center w-full'><img class='rounded-md' src='../../../../../Math1.jpeg'></img></div>" +
      "<br>" +
      "<span><strong>Mathematics</strong> is a <strong>scientific discipline</strong> that produces <strong>novel findings</strong>. </span>" +
      "<br>" +
      "<br>" +
      "<p>It involves creating and applying <strong>abstract concepts, symbols</strong> and <strong>rules</strong> to explore various <strong>phenomena</strong> and <strong>patterns</strong>.</p>" +
      "<br>" +
      "<p>Mathematics is an effective instrument that enables us to <strong>anticipate outcomes</strong> and <strong>make predictions</strong>. It helps us to <strong>test hypotheses, verify facts</strong> and <strong>solve problems</strong> in various domains of knowledge. This tool also reveals <strong>hidden connections</strong> and <strong>insights</strong> that can inspire <strong>new questions and discoveries</strong>.</p>" +
      "<br>" +
      "<p>It is also a way of <strong>communicating</strong> a <strong>problem</strong> in a <strong>precise and logical manner</strong>, using a <strong>common language</strong> that can be understood by anyone who knows the rules.</p>" +
      "<br>" +
      "<p>Mathematics is used in <strong>game development</strong> to calculate physics, stats, the economy, levels and more;</p>" +
      "<br>" +
      "<div><img class='rounded-md' src='../../../../../Math2.jpeg'></img></div>",
  ],
  ["idkz", "2023/07/21", "Vectors", "", ""],
  ["Hells_Chan", "2023/07/21", "Lists", "", ""],
  ["Capybaraa", "2023/07/21", "Ordered Lists", "", ""],
  ["Villager", "2023/07/21", "Tuples", "", ""],
];

export default function Math1() {
  return (
    <>
        {contributors.map((item,key)=>
        <Element contributor={item} cIndex={key} />
        )}
    </>
  );
}
