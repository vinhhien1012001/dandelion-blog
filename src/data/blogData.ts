
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime: number;
  wordCount: number;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Quiet Power of Small Moments",
    date: "May 10, 2025",
    excerpt: "Finding meaning in everyday experiences and how they shape our perspective on life.",
    content: `
      <p>There's something magical about the quiet moments that fill our days. The steam rising from morning coffee, the way light filters through leaves, the sound of rain against windows. These aren't just moments—they're tiny anchors that ground us in the present.</p>
      
      <p>Recent studies in psychology suggest that mindfulness of these small moments can significantly impact our overall well-being. When we pause to notice the details around us, we activate parts of our brain associated with gratitude and contentment.</p>
      
      <p>I started collecting these moments in a journal last year. Not the big events—birthdays, achievements, milestones—but the whisper-quiet instances that would otherwise slip through memory's cracks. The neighbor's cat who visits my porch each morning. The particular shade of blue the sky turns just before sunset. The familiar creak of a floorboard.</p>
      
      <h3>The Science Behind Small Moments</h3>
      
      <p>Researchers at Harvard found that people who regularly document small positive experiences show improved immune function and report higher levels of happiness. It isn't about grand gestures or achievements but rather about training your attention to notice what's already there.</p>
      
      <p>These moments matter because they constitute the bulk of our lives. We don't live in the highlight reel—we live in the spaces between, in the ordinary Tuesday afternoons and unremarkable Sunday mornings.</p>
      
      <p>So tomorrow, try to catch yourself in the middle of one of these moments. Maybe it's the perfect temperature of your shower, the satisfaction of finding a matching sock, or the taste of your favorite snack. Whatever it is, give it your full attention. It matters more than you think.</p>
      
      <p>The more we practice recognizing these small delights, the more of them we tend to notice. It's a virtuous cycle of attention and appreciation that costs nothing but pays dividends in how we experience our days.</p>
      
      <p>As the poet William Blake wrote, "To see a World in a Grain of Sand / And a Heaven in a Wild Flower / Hold Infinity in the palm of your hand / And Eternity in an hour."</p>
      
      <p>Perhaps that's the greatest skill we can develop: not the ability to achieve more or acquire more, but to notice more of what's already here.</p>
    `,
    author: "Emma Wilson",
    category: "Mindfulness",
    readTime: 4,
    wordCount: 320,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Lost in the Pages: Why Physical Books Still Matter",
    date: "May 5, 2025",
    excerpt: "In a digital age, the irreplaceable experience of reading physical books and why they endure.",
    content: `
      <p>In an age where almost everything has migrated to screens, physical books remain stubbornly, wonderfully analog. There's something about the weight of a book in your hands, the sound of pages turning, and even the smell of paper that creates a reading experience screens can't replicate.</p>
      
      <p>Studies have shown that reading physical books improves comprehension and retention compared to digital formats. The tangible progress of moving through pages gives our brains spatial references that help us remember what we've read and where we encountered specific information.</p>
      
      <h3>The Ritual of Reading</h3>
      
      <p>Beyond the cognitive benefits, physical books create rituals. The careful selection at a bookstore. The coffee shop corner where you first crack the spine. The bedside stack that grows and shrinks as seasons change. These rituals anchor reading in our physical lives, making it more than just content consumption.</p>
      
      <p>Books also escape the economies of attention that govern our digital devices. When you open a novel, you're not competing with notifications, tempted by other apps, or tracked by algorithms. There's just you and the author's words—a rare direct connection in our mediated world.</p>
      
      <p>Physical books age with us, too. They collect dog-ears and coffee stains. They hold ticket stubs and forgotten bookmarks. They become artifacts of our reading lives, carrying memories not just in their content but in their very physicality.</p>
      
      <p>None of this is to dismiss digital reading, which offers its own significant benefits—accessibility, portability, and instant acquisition chief among them. But perhaps we can appreciate the distinct value of both formats rather than seeing them as competitors.</p>
      
      <p>In fact, sales figures suggest many readers agree. After an initial decline with the introduction of e-readers, physical book sales have stabilized and even grown in recent years. Independent bookstores, once thought endangered, have seen a remarkable resurgence.</p>
      
      <p>So next time you reach for something to read, consider what experience you want—not just what content. Sometimes the medium truly is part of the message.</p>
    `,
    author: "Emma Wilson",
    category: "Literature",
    readTime: 3,
    wordCount: 280,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Seasonal Rhythms: Living in Harmony with Nature's Cycles",
    date: "April 29, 2025",
    excerpt: "Exploring how aligning our lives with seasonal changes can improve wellbeing and productivity.",
    content: `
      <p>Before the advent of electric lights and climate control, human lives were intimately connected to seasonal rhythms. We woke and slept with the sun. We ate foods as they came into season. Our work, celebrations, and rest periods followed natural cycles.</p>
      
      <p>Today, we've largely divorced ourselves from these patterns. We maintain the same schedules year-round, eat the same foods in January as July, and keep our environments at a constant temperature regardless of what's happening outside.</p>
      
      <h3>The Cost of Constancy</h3>
      
      <p>This consistency comes at a cost. Research in chronobiology—the study of biological rhythms—suggests that our bodies are still deeply attuned to seasonal changes. Our hormones, metabolism, immune function, and even mood naturally fluctuate throughout the year.</p>
      
      <p>When we ignore these rhythms, we may be working against our biology rather than with it. The winter blues many experience, for instance, might not be something to simply push through, but rather a natural signal to slow down, conserve energy, and turn inward during darker months.</p>
      
      <h3>Reclaiming Seasonal Living</h3>
      
      <p>What might it look like to reintroduce some seasonal awareness into modern life? It doesn't mean abandoning convenience or returning to preindustrial conditions. Instead, it might involve subtle shifts:</p>
      
      <p>In winter, perhaps we honor the natural inclination toward rest with earlier bedtimes and more reflective activities. Spring might bring a natural increase in projects and planning as energy increases. Summer could be for maximum outward activity and connection, while autumn becomes a time of harvest and preparation.</p>
      
      <p>Our food choices can follow similar patterns—emphasizing warming, substantial foods in cold months and lighter, cooling options in summer. Even our exercise might shift from vigorous outdoor activities in temperate months to gentler, indoor practices during extremes of heat or cold.</p>
      
      <p>The benefits of this approach aren't just philosophical. Studies show that eating seasonally local foods provides optimal nutrition, as plants and animals contain different properties depending on their growth cycle. Adjusting sleep patterns to match daylight hours helps regulate circadian rhythms that influence countless bodily processes.</p>
      
      <p>Perhaps most importantly, living with greater seasonal awareness reconnects us to the world beyond our screens and climate-controlled environments. It reminds us that we remain part of natural cycles larger than ourselves—a humbling and comforting truth in uncertain times.</p>
    `,
    author: "Emma Wilson",
    category: "Wellness",
    readTime: 5,
    wordCount: 350,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    title: "The Art of Thoughtful Gifting",
    date: "April 22, 2025",
    excerpt: "Moving beyond consumerism to give presents that truly matter and connect us to others.",
    content: `
      <p>Gift-giving has been a human practice for thousands of years, appearing in virtually every culture throughout history. At its best, the exchange of gifts strengthens bonds, expresses care, and creates shared joy. But in our consumer-driven world, gifting often becomes an obligation rather than an art—another checkbox on our endless to-do lists.</p>
      
      <p>What if we approached gifting differently? Not as a requirement to purchase something whenever the calendar dictates, but as an opportunity to practice attention and connection.</p>
      
      <h3>The Science of Good Gifts</h3>
      
      <p>Interestingly, research consistently shows that the "perfect gift" isn't about price tag or even getting exactly what someone asked for. Studies in consumer psychology find that the most meaningful gifts share certain qualities: they reflect thoughtful knowledge of the recipient, create an experience rather than just providing an object, and often involve an element of surprise or delight.</p>
      
      <p>The best gifts say "I see you" rather than "I spent money." They demonstrate that we've been paying attention to someone's needs, desires, struggles, or joys.</p>
      
      <h3>Beyond Objects</h3>
      
      <p>Some of the most powerful gifts aren't things at all. The gift of time—offering to watch a friend's children, teaching someone a skill you've mastered, or simply setting aside uninterrupted hours for conversation—often means more than anything that comes in a package.</p>
      
      <p>Similarly, the gift of shared experience creates memories that outlast material possessions. Concert tickets, cooking classes taken together, or even a planned day hike can strengthen relationships in ways that objects rarely do.</p>
      
      <h3>Practical Approaches</h3>
      
      <p>For those looking to be more thoughtful gift-givers, a simple practice helps: keep a running note in your phone for each important person in your life. Throughout the year, jot down things they mention wanting or needing, problems they're trying to solve, or interests they're developing. When gift-giving occasions arise, you'll have a personalized reference rather than resorting to last-minute generic choices.</p>
      
      <p>Another approach is to establish gift traditions that focus on meaning rather than accumulation. Some families exchange only handmade items, write letters of appreciation instead of buying presents, or contribute to chosen charities in each other's names.</p>
      
      <p>Whatever method you choose, shifting from obligation to opportunity changes everything about gifting. It becomes less about consumption and more about connection—which is what gifts were meant to foster all along.</p>
    `,
    author: "Emma Wilson",
    category: "Relationships",
    readTime: 4,
    wordCount: 370,
    image: "/placeholder.svg"
  }
];

export const getRelatedPosts = (currentPostId: string, category: string): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 2);
};
