import { ImageSourcePropType } from "react-native";
import { Region } from "react-native-maps";

export const DOCTOR_CARDS_BORDER_COLOURS = ["border-yellow-500", "border-red-500", "border-green-500", "border-purple-500"]

export type RegionData = Region & {
  name: string;
  phone_number: string;
}

export const REGIONS: RegionData[] = [
  {
    name: "Adishaanti Care Clinic",
    phone_number: "+919090889988",
    latitude: 12.907381398875207,
    longitude: 77.50347898405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    name: "Muzitic Mental Hospital",
    phone_number: "+919876543201",
    latitude: 12.904381398875207,
    longitude: 77.50547898405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    name: "Pratap Hospital",
    phone_number: "+919489300110",
    latitude: 12.902381398875207,
    longitude: 77.50947898405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
];

export type ContentPiece = {
  imageSource?: ImageSourcePropType;
  title: string;
  shortText: string;
  longText: string;
};

export const CONTENT_PIECES: ContentPiece[] = [
  {
    title: "Anxiety",
    shortText: "Anxiety, a knot of apprehension that tightens in the gut and sends worry spiraling through our minds, is a universal human experience. It's the nervous flutter before a big presentation, the pit in your stomach on a first date, the churning dread...",
    longText: "Anxiety, a knot of apprehension that tightens in the gut and sends worry spiraling through our minds, is a universal human experience. It's the nervous flutter before a big presentation, the pit in your stomach on a first date, the churning dread of an upcoming deadline. In these situations, anxiety acts as a primal motivator, driving us to prepare, to focus, to be our best selves in the face of a challenge.\n\nBut for some, anxiety transforms from a helpful nudge into a relentless tyrant. When worry becomes chronic, when fear cripples daily life, and intrusive thoughts cast a long shadow, anxiety has crossed the line into a disorder. The once-useful tension morphs into a suffocating fog, obscuring joy, productivity, and connection. Whether it's the social anxiety that mutes our voices in crowded rooms or the generalized anxiety that paints every corner with worry, anxiety disorders can be debilitating."
  },
  {
    title: "Depression",
    shortText: "Depression, unlike anxiety's knot of worry, often feels like a heavy, empty cloak draped over the soul. It's the weight that pulls you down when laughter feels like a distant memory, the silence that screams when joy seems like a foreign...",
    longText: "Depression, unlike anxiety's knot of worry, often feels like a heavy, empty cloak draped over the soul. It's the weight that pulls you down when laughter feels like a distant memory, the silence that screams when joy seems like a foreign language. Colors dim, motivation dwindles, and the once vibrant tapestry of life fades to shades of gray.\n\nThis emotional leadenness isn't simply sadness, though sadness may be a thread woven into its fabric. Depression is a pervasive, persistent dampening of the spirit, a draining of the will to live. It can sap energy, leaving even the simplest tasks feeling insurmountable. It can distort thoughts, whispering negativity where hope once bloomed. And it can isolate, turning the sufferer inward, away from the connections that could offer solace and support. Though depression's grip may feel tight, it's crucial to remember that it is not a life sentence. With understanding, support, and professional help, the cloak can be lifted, and the vibrant tapestry of life can be rewoven, thread by thread."
  },
  {
    title: "Post traumatic stress disorder",
    shortText: "The echoes of trauma don't fade with time. They linger, sharp and jagged, in the mind of someone with Post-Traumatic Stress Disorder (PTSD). Imagine reliving a terrifying event - a car crash, a violent attack, a devastating loss...",
    longText: "The echoes of trauma don't fade with time. They linger, sharp and jagged, in the mind of someone with Post-Traumatic Stress Disorder (PTSD). Imagine reliving a terrifying event - a car crash, a violent attack, a devastating loss - not just in dreams, but in searing flashbacks that rip you back to the heart of the horror. Every loud noise, every unexpected touch, can trigger a fresh wave of panic, catapulting you back to that frozen moment of fear.\n\nThis hypervigilance, this constant bracing for another blow, steals the peace of the present. Sleep becomes a battlefield of nightmares, relationships strain under the weight of emotional withdrawal, and even the most mundane tasks feel fraught with danger. The world shrinks, painted in shades of suspicion and anxiety. But beneath the fear and isolation, there's a flicker of resilience, a testament to the human spirit's ability to heal. With understanding, support, and effective treatment, the echoes of trauma can soften, the world can re-expand, and hope can rise anew from the ashes of fear."
  },
  {
    title: "Eating disorders",
    shortText: "In the mirror's unforgiving gaze, a battle wages. On one side, a distorted self-image, fueled by societal pressures and a relentless inner critic, demands relentless control. On the other, the primal cry of the body...",
    longText: "In the mirror's unforgiving gaze, a battle wages. On one side, a distorted self-image, fueled by societal pressures and a relentless inner critic, demands relentless control. On the other, the primal cry of the body, starved for nourishment and connection, whispers pleas for help. This is the brutal reality of eating disorders, a complex web of mental illness and destructive behaviors that ensnare individuals in a cycle of fear and suffering.\n\nFrom the crippling restriction of anorexia, where meals become enemies and bones become trophies, to the binge-purge chaos of bulimia, where food transforms into a weapon of self-punishment, eating disorders warp our relationship with nourishment. The consequences are devastating, both physically and emotionally. Organ failure, malnutrition, and depression are just a few of the grim companions on this perilous journey. Yet, beneath the distorted self-image and the destructive behaviors, there lives a spark of hope. Recovery, though arduous, is possible. With professional support, self-compassion, and a fierce determination to reclaim one's health and life, the chains of eating disorders can be broken, and the journey towards healing can begin."
  }
]