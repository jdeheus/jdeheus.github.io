(function () {
  const ROOT = window.location.pathname.includes("/case-studies/") ? "../" : "";
  const IMG = `${ROOT}assets/images/`;
  const LOGO = `${ROOT}assets/logos/`;
  const LIVE = "https://www.jondeheus.com";

  const remote = (path) => `${LIVE}${path}`;

  window.PORTFOLIO_DATA = {
    root: ROOT,
    nav: [
      { label: "Resume", href: `${ROOT}docs/jonathan-de-heus-resume.pdf` },
      { label: "About", href: `${ROOT}about.html` },
      { label: "Contact", href: `${ROOT}contact.html` },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jdeheus", external: true, icon: "linkedin" },
    ],
    landingCases: [
      { id: "pwc-audit", number: "01", title: "PwC Audit", meta: "Content Systems / Complete Redesign", href: `${ROOT}case-studies/pwc-audit.html` },
      { id: "onengine", number: "02", title: "ONEngine", meta: "Design mentorship / B2B SaaS", href: `${ROOT}case-studies/onengine.html` },
      { id: "omnicell-benchmarking", number: "03", title: "Omnicell - Benchmarking", meta: "Complete redesign / Healthcare SaaS", href: `${ROOT}case-studies/omnicell-benchmarking.html` },
      { id: "omnicell-scorecards", number: "04", title: "Omnicell - Scorecards", meta: "Data visualization / Stakeholder management", href: `${ROOT}case-studies/omnicell-scorecards.html` },
      { id: "ford-credit", number: "05", title: "Ford Credit", meta: "User research / Data analytics", href: `${ROOT}case-studies/ford-credit.html` },
    ],
    about: {
      image: remote("/Pics/Portfolio_Pictures/About/landscape.jpg"),
      intro: "Hey there, I'm Jon! I'm a results driven senior product designer with over 10 years of experience in crafting intuitive, user-centric digital experiences.",
      offClock: "When I'm not designing, I enjoy spending time with my cat, trying to keep my plants alive, and exploring Tampa Bay as well as the rest of the world.",
      steps: [
        { label: "Foundation", body: "Masters in Human Computer Interaction from the University of Michigan." },
        { label: "Industry Range", body: "10+ years across oil and gas, healthcare, consumer facing fintech, automotive, and SaaS." },
        { label: "End to End Practice", body: "Product design primarily focused on B2B SaaS applications with a little B2C fintech in the mix." },
        {
          label: "Companies",
          logos: [
            { src: remote("/Pics/Homepage_Pictures/onengine.svg"), alt: "ONEngine" },
            { src: remote("/Pics/Homepage_Pictures/omnicell.svg"), alt: "Omnicell" },
            { src: remote("/Pics/Homepage_Pictures/ford_logo.svg"), alt: "Ford" },
            { src: remote("/Pics/Homepage_Pictures/bosch_logo.svg"), alt: "Bosch" },
            { src: remote("/Pics/Homepage_Pictures/ge_og_logo.svg"), alt: "GE Oil & Gas" },
          ],
        },
        { label: "Current Role", body: "Crafting intuitive, user-centric digital experiences at 3Cloud." },
      ],
    },
    contact: {
      headline: "Let's talk about work that needs to be clarified.",
      body: "I work best on ambiguous product problems where research, systems thinking, and delivery constraints all have to sit at the same table. Feel free to message me if you:",
      reasons: [
        "Have a product problem to untangle",
        "Want to discuss a potential job",
        "Just want to reach out & say hi 👋",
      ],
      mailto: "jon@jondeheus.com",
    },
    caseOrder: ["pwc-audit", "onengine", "omnicell-benchmarking", "omnicell-scorecards", "ford-credit"],
    cases: {
      "pwc-audit": {
        title: "PwC Audit",
        summary: "Understanding fragmented audit content-management workflows, identifying usability issues in legacy systems, and working with an Agile based workflow that's supported by AI tooling.",
        tags: ["Content Systems", "Healthcare SaaS"],
        info: {
          role: "Senior Product Designer",
          challenge: "Legacy systems, fragmented interfaces, and shifting priorities.",
          timeline: "Jan 2025 - Nov 2025",
          collaborators: "Auditors, dev teams",
        },
        sections: [
          {
            title: "Overview",
            subtitle: "Improving audit authoring",
            body: [
              "When I joined PwC's Audit organization, I was tasked with helping modernize content management tools that were used to create, maintain, and distribute audit content for teams around the world. Our users were content managers working within fragmented legacy systems that had evolved over many years and struggled to support the growing needs of the business due to outdated practices. To identify opportunities for improvement, I partnered with product managers, subject matter experts, auditors, and engineering teams to better understand content workflows, user needs, and operational challenges.",
              "My work focused on simplifying complex workflows and creating a stronger foundation for future growth. Through workflow analysis and heuristic evaluations, I identified issues related to information architecture, error prevention, and information overload that were creating friction throughout the content creation process. These insights informed redesign work focused on streamlining workflows and reducing complexity where appropriate. I was also part of one of the first groups within PwC to experiment with a more structured Agile based workflow that used AI to move faster while still delivering results that benefited users.",
            ],
          },
          {
            title: "Audit Beginnings",
            subtitle: "Learning the problem space & initial workflow",
            body: [
              "Before I could begin improving the experience, I needed to develop a deep understanding of the broader audit ecosystem. The content management tools I was responsible for were only one part of a much larger workflow that spanned multiple audit verticals, each with its own processes, dependencies, and requirements. I spent time learning how content was created, managed, distributed, and ultimately consumed by auditors so I could understand where friction existed and how decisions made in one area impacted users elsewhere in the system.",
              "As I became more familiar with the existing platforms, a consistent pattern emerged. Both the content management and distribution systems had evolved over many years, resulting in fragmented experiences that were difficult to navigate and maintain. I also found that the team's delivery process was often impacted by shifting priorities and expanding requirements. Features frequently started and stopped as new needs emerged, while additional functionality was regularly added midstream, creating challenges for both design and technical architecture. Understanding these constraints early helped me identify not only usability issues within the product, but also process challenges that would need to be addressed for the team to scale more effectively.",
            ],
            timeline: true,
          },
          {
            title: "Heuristic Analysis Results",
            subtitle: "Friction in the existing system",
            body: [
              "With a stronger understanding of the product ecosystem and its workflows, I began evaluating the existing experience to identify the most significant sources of user friction. My goal was to understand where the platform was creating unnecessary complexity and uncover opportunities to make common tasks more intuitive and efficient.",
              "Several themes quickly emerged. The platform's information architecture had evolved over time and was often difficult for new users to navigate. While experienced users generally had few issues, much of that success came from familiarity with the system rather than the system itself being intuitive. I also uncovered issues related to error prevention, as users could occasionally encounter validation errors when creating content because required fields or configuration options were hidden from view. These issues created unnecessary friction and made otherwise straightforward tasks more difficult to complete.",
              "Information overload presented another challenge. Many of the platform's tables contained columns and data points that were not relevant to the user's immediate task, creating visual clutter and increasing cognitive load. Taken together, these findings revealed a common pattern: the platform had gradually evolved to support experienced power users, but at the expense of discoverability, clarity, and efficiency. By documenting these issues early, I was able to establish a clearer set of priorities for future design improvements and create alignment around where the experience needed the most attention.",
            ],
            media: [
              { type: "image", src: `${IMG}pwc-current-link-reference.png`, fallback: remote("/Pics/Portfolio_Pictures/Omnicell/sc_day1.png"), caption: "Link references - Old version", squareOnTablet: true },
              { type: "image", src: `${IMG}pwc-proposed-link-reference.png`, fallback: remote("/Pics/Portfolio_Pictures/Omnicell/sc_day2.png"), caption: "Link Reference - Proposed", squareOnTablet: true },
              { type: "image", wide: true, src: `${IMG}pwc-activity-screen.png`, fallback: remote("/Pics/Portfolio_Pictures/Omnicell/sc_day1.png"), caption: "Initial design for Audit." },
            ],
          },
          {
            title: "Changing Working Patterns",
            subtitle: "A New Way of Working",
            body: [
              "Around the time I hit my 7th month at PwC, they began adopting a new delivery approach designed to reduce turnaround times and accelerate product development utilizing AI. PMs could utilize Cursor or ChatGPT to create feature requirements, and designers could utilize Cursor or Figma Make to design and use ChatGPT to create prompts. Rather than spending large amounts of time gathering requirements and designing complete end-to-end solutions, work was increasingly broken into smaller, more focused pieces that could be delivered more quickly.",
              "From a design perspective, this had both upsides and downsides. Smaller scopes made it easier to validate ideas and maintain momentum, but the tight schedule had the potential to reduce the amount of upfront discovery which could potentially lead to rework down the line. We also continued to shift between different initiatives as priorities changed, with the assumption that the increased speed of AI would let us quickly resume where we left off.",
            ],
          },
          {
            title: "Experimenting with AI Tools",
            subtitle: "Utilizing AI tools",
            body: [
              "This was the first time that I was able to really use AI enhanced tooling in the workplace. As mentioned in the previous section, the tools available to me were ChatGPT, Cursor and Figma Make. I predominantly used Figma Make because the credits were free at the time, and because the shift to JADx made fast iteration in Figma Make useful. While I attempted to utilize Cursor at work, I had much less success because I had a Windows laptop that was locked down by IT. Cursor's ask mode worked, but it was easier to go to ChatGPT.",
              "I took it upon myself to get a Cursor subscription, and spent some time attempting to build out a functional prototype of what I was working on. This was when the Figma MCP server was in its infancy, and between recurring Cursor errors and corporate restrictions that prevented direct access to my file, I was only able to get a rudimentary version running on my machine. Despite the setbacks, this was an achievement and good practice for working with these tools in the future.",
            ],
            media: [
              { type: "image", wide: true, src: `${IMG}pwc-figma-make-1.jpg`, fallback: remote("/Pics/Portfolio_Pictures/Omnicell/sc_day1.png"), caption: "Utilizing Figma Make to quickly iterate on Audit screens" },
            ],
          },
        ],
      },
      onengine: {
        title: "ONEngine",
        summary: "Unified disparate systems, led a team of 3 designers, and managed stakeholder expectations all while building a design first environment.",
        tags: ["Design Mentorship", "B2B SaaS"],
        info: {
          role: "UX Team Lead",
          challenge: "Unified 2 disparate systems, mentored 3 junior designers.",
          timeline: "Jan 2024 - Spt 2024",
          collaborators: "CEO, PM, Devs",
        },
        sections: [
          {
            title: "Overview",
            subtitle: "Bringing design structure to a fragmented platform",
            body: [
              "ONEngine brought together multiple systems that had grown independently over time. My role focused on helping the team move toward a design-first working model while still supporting day-to-day product delivery across inherited tools, fast-moving feature requests, and a growing product organization.",
              "A major part of the challenge was introducing design structure into an environment where product decisions were often happening quickly and documentation was inconsistent. I helped create clearer artifacts for stakeholder conversations, built reusable patterns where possible, and pushed the team toward a more deliberate product process.",
              "Alongside feature work, I mentored junior designers, helped align stakeholders around complex workflows, and introduced more consistent documentation and review practices. That combination gave the team clearer artifacts for decision making and helped designers, PMs, and engineers move with more confidence.",
            ],
          },
          {
            title: "Introductory Design Work",
            subtitle: "Understanding inherited systems",
            body: [
              "When I first started at ONEngine, I focused on understanding the business and user needs behind the existing product ecosystem. I talked with as many internal partners as I could, read through Confluence documentation, and reviewed the systems already in place so I could understand how the product was being used and where the business wanted it to go next.",
              "The heuristic analysis became the most useful part of that early discovery. There were two systems in play: one that teams used day to day, and another that the primary stakeholder saw as design inspiration. Both had major usability issues, including pages with overwhelming amounts of information, pages with very little content, hidden information patterns, empty fields with no explanation, buttons that appeared active but produced no visible result, and weak information architecture that made key information difficult to access.",
              "Those findings helped me identify where workflows could be unified and where design documentation was needed before larger product changes could move forward. Instead of treating the redesign as a surface-level cleanup, the audit gave the team a clearer view of which legacy behaviors needed to be preserved, which patterns were causing confusion, and which decisions needed to be made before the experience could become more coherent.",
            ],
            media: [
              { type: "image", src: remote("/Pics/Portfolio_Pictures/ONEngine/Elie.jpg"), caption: "Screenshot of the first system that was in use." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/ONEngine/Aqua_preview.jpg"), caption: "Screenshot of the other system that wasn't being used." },
            ],
          },
          {
            title: "Redesign & Initial Complications",
            subtitle: "Neverending scope creep",
            body: [
              "The first screen I started working on was the work order list view. This was one of the few moments where I could talk directly with actual users of the existing software and identify which information was important to them. After reviewing their feedback, I built a wireframe that established the basic layout for future screens, then moved into a work order overview page.",
              "After showing a preview to the stakeholder, he pushed for major changes, especially expanding the table to include more than 12 columns by default. Follow-up conversations revealed three drivers behind the request: he had an ultrawide monitor that could display every column without horizontal scrolling, he viewed himself as a power user who needed all columns even though he could not clarify how often each was used, and he wanted new table features that had not come up in conversations with other users.",
              "I made targeted changes to satisfy the demand without letting the table become unusable for everyone else. Depending on screen size, specific columns on both sides of the table could remain fixed while users scrolled horizontally, and I added a way for users to choose which columns were shown. During this same period, I created vision decks with PMs and stakeholders to explain why we were working on certain features, ground expectations for the initial sprint, and clarify what belonged in future sprints.",
            ],
            media: [
              { type: "embed", wide: true, src: "https://embed.figma.com/proto/qOP994ohXgOuZbRDCPinIi/Procurement-Alignment?node-id=3-156&node-type=frame&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A156&embed-host=share", caption: "Vision deck artifact used to align scope and direction." },
            ],
          },
          {
            title: "Fleshing Out Work Orders",
            subtitle: "Complexity in the details",
            body: [
              "The next step after building out the list view was to start working on the Work Order detail screens themselves. After reviewing the existing system and talking with the stakeholder and CTO about their goals for V0, I determined that the page needed a fixed area at the top for key information, while the body would use tabs to organize relevant details and deeper work order tasks.",
              "I wanted to get more feedback from the users we had spoken with earlier, but the primary stakeholder made that difficult, so I worked with the information available. After establishing the basic layout, I built each tab by identifying which fields from the existing flow were still needed and where there might be opportunities to add information that could benefit users. For areas that connected to back-end engineers working with LLMs, I spent time talking through constraints and building flows to ensure the design could actually be built.",
              "Working with the primary stakeholder continued to be frustrating. He would frequently expand the scope of a tab to a point where it created serious UX and engineering issues, want one feature one day and remove it the next, or combine both patterns at once. For example, the chat tabs originally needed to support text-only messages inside the work order and email, but he wanted to expand them into a replacement for the internal chat system with Slack-like behavior and WhatsApp-style media attachments, individual messages, and group messages. The CTO and I were eventually able to limit that scope because of the backend effort required, but only after significant time had already been spent building through the expanded interface.",
            ],
            media: [
              { type: "image", src: remote("/Pics/Portfolio_Pictures/ONEngine/Work%20Orders%20Wireframe%20V1.jpg"), caption: "Initial wireframe showing the layout of the Work Orders section." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/ONEngine/DeepAI%20Flow.jpg"), caption: "Quick flow made to align stakeholders around the Work Order Proposal section." },
              { type: "embed", wide: true, src: "https://embed.figma.com/proto/lBcgpOrzIP4ZROfUqatYHv/Interactive-List-View?node-id=68-32479&node-type=frame&scaling=min-zoom&content-scaling=fixed&page-id=15%3A4970&starting-point-node-id=68%3A32479&embed-host=share", caption: "Interactive work orders prototype." },
            ],
          },
          {
            title: "UX Team Lead Work",
            subtitle: "Initiatives & limiting scope",
            body: [
              "Along with design work, I was also hired to help build out the UX team and promote design throughout the company. One of the first initiatives I took on was creating a working design system so new product work had a stronger foundation and junior designers had clearer patterns to lean on.",
              "I helped evaluate design system options, advocated for buying a strong starting point instead of building every component from scratch, and acted as a reviewer as the team extended it. That let us move faster while still building a more consistent product language.",
              "I also pushed the team to create vision statement decks when kicking off new features. These documents helped explain the problem, define the intended direction, limit scope growth, and gather buy-in from stakeholders before teams moved too far into detailed production work.",
            ],
          },
        ],
      },
      "omnicell-benchmarking": {
        title: "Omnicell - Benchmarking",
        summary: "Redesigned a complex data visualization heavy healthcare SaaS product vertical and helped align stakeholders around the future of benchmarking.",
        tags: ["Complete Redesign", "Healthcare SaaS"],
        info: {
          role: "Senior Product Designer",
          challenge: "Chart density, unclear hierarchy, and stakeholder resistance.",
          timeline: "Nov 2021 - Nov 2023",
          collaborators: "Strategists, PMs, product owners",
        },
        sections: [
          {
            title: "Overview",
            subtitle: "Reframing a complex product vertical",
            body: [
              "Benchmarking was a complex healthcare SaaS vertical that relied heavily on data visualization. The existing experience had become difficult to navigate as more charts, filters, and reporting needs were added over time, and the product was trying to support too many analytical jobs in the same crowded workspace.",
              "The product needed to support pharmacy leaders who were trying to understand performance across large operational datasets. They needed to see where they stood, identify meaningful comparisons, and understand which metrics required attention without being forced through an overwhelming amount of charting at once.",
              "My work focused on simplifying the information architecture, reducing visual noise, and helping stakeholders align around a clearer future product direction. That meant balancing scheduled delivery work with a broader effort to define what Benchmarking should become for strategists, product owners, and end users.",
            ],
          },
          {
            title: "Introduction to Benchmarking",
            subtitle: "Understanding the existing experience",
            body: [
              "A heuristic analysis revealed issues with findability, clarity, documentation, and consistency. The product was crowded and difficult to understand, especially as more charts were being added to an already dense page without a clear hierarchy for what users should interpret first.",
              "The first level of information did not consistently explain what users were looking at, and deeper analysis often required drilling through pages that did not clearly distinguish primary insights from supporting detail. Some areas also mixed clickable and non-clickable elements in ways that made the interface feel unpredictable.",
              "Key issues included unclear chart hierarchy, limited guidance for interpreting benchmark results, inconsistent interaction patterns, and pages that attempted to solve too many jobs at once. The audit gave me a shared language for discussing why the experience felt overwhelming and where the team needed to simplify before adding more functionality.",
            ],
          },
          {
            title: "Setbacks & Charting a Way Forward",
            subtitle: "A workshop changed the trajectory",
            body: [
              "While I was working on the initial ask from the Benchmarking PM, I met with subject matter experts to get their feedback about the existing application and where they wanted to see it go in the future. The more I listened, the more I realized the existing product did not have a solid foundation for the features they wanted, and that continuing to add features without a clearer direction would only increase the confusion.",
              "I used workshops and follow-up conversations to understand current user flows, where strategists were seeing repeated confusion, and which proposed features would require a stronger structure before they could be useful. That gave the team a better way to separate short-term delivery work from broader product direction.",
              "A workshop setback became a spark for change. One strategist pointed out that previous advice had gone unanswered, and that the current meeting felt like a waste of time if the product direction was not going to change. We used the remainder of the time to discuss prior efforts, understand what had stalled, and map a more realistic path for future design work.",
            ],
            media: [
              { type: "image", wide: true, src: remote("/Pics/Portfolio_Pictures/Omnicell/Flow.png"), caption: "Initial flow and structure used to chart a path forward." },
            ],
          },
          {
            title: "Gathering Buy-in",
            subtitle: "Breaking through resistance",
            body: [
              "After the meeting with the strategists, I took two parallel courses of action: continue working on scheduled features and get clarity from leadership about the future direction of Benchmarking. That let the team keep delivery moving while also acknowledging that the product needed a stronger strategic foundation and a clearer vision statement to guide future decisions.",
              "The vision statement created a clearer narrative for why the product needed to change and gave me a way to frame the redesign around user needs instead of isolated feature requests. It also helped bring leadership, strategy, and product conversations into the same decision-making space.",
              "After drafting the vision statement, I scheduled meetings with strategists to get buy-in. They were receptive, and we worked together to identify features for wireframes that could provide a visual direction and make the proposed future easier for leadership and product partners to evaluate.",
            ],
            media: [
              { type: "embed", wide: true, src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fq9BorAxIQa0S4y2pUS3T8Q%2FUpdated_Benchmarking_Screens%3Fpage-id%3D2%253A1617%26type%3Ddesign%26node-id%3D3-8441%26viewport%3D1141%252C652%252C0.25%26t%3DsrYgyHoWDKv3iZ9e-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D3%253A8441%26mode%3Ddesign", caption: "interactive copy of presentation" },
            ],
          },
          {
            title: "Wrap-up",
            subtitle: "Alignment through collaboration",
            body: [
              "After the successful in-person meetings, the revised direction gave the team a stronger shared language for evaluating future Benchmarking work. I began working more closely with core subject matter experts, using recurring meetings and async feedback to pressure-test wireframes before they moved into handoff.",
              "That collaboration helped turn abstract strategy into concrete screens. Instead of relying only on written requirements, the team could react to interaction flows, compare alternatives, and decide which ideas should become part of the immediate product direction.",
              "The prototype helped make the proposed experience tangible, gave stakeholders something concrete to react to, and helped shift the conversation from isolated feature requests toward a more coherent product direction. Once the screens were finalized, I stayed close to developers during handoff so implementation questions could be answered quickly.",
            ],
            media: [
              { type: "embed", wide: true, src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fq9BorAxIQa0S4y2pUS3T8Q%2FUpdated_Benchmarking_Screens%3Fpage-id%3D3%253A9216%26type%3Ddesign%26node-id%3D3-11768%26viewport%3D1331%252C610%252C0.13%26t%3DkcoU518zgBUAEHfH-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D3%253A11768%26mode%3Ddesign", caption: "final interactive prototype for benchmarking" },
            ],
          },
          {
            title: "What Was Next?",
            subtitle: "Future roadmap workshops",
            body: [
              "After working with the developers to ensure that the actual product adhered as close to the mockups as possible, I then turned my attention to the future Benchmarking roadmap. I hosted a workshop with the rest of my UX team in order to identify features that they felt should be included in future versions of IOS, and afterwards I hosted a second workshop with the PO and PM of Benchmarking in order to narrow down the results from the first workshop so that only features relevant to Benchmarking remained. This helped move roadmap planning from a loose set of ideas into a more focused set of opportunities the Benchmarking team could act on.",
            ],
            media: [
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell/sc_day1.png"), caption: "Affinity diagram from day 1 of the future Benchmarking feature workshop." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell/sc_day2.png"), caption: "Affinity diagram from day 2 of the future Benchmarking feature workshop." },
            ],
          },
          {
            title: "Non-Benchmarking Work",
            subtitle: "Broader design practice",
            body: [
              "While Benchmarking was my main focus, I had multiple responsibilities outside of it as well. I was responsible for other design related tasks such as taking features that existed in legacy software, and ensuring that as they were brought into the cloud they met our design system standards. I also began mentoring more junior designers. This usually took the form of 1:1 meetings and making time for them to reach out to me in order to get feedback on their designs. Occasionally, I would hold paired design sessions in order to demonstrate to a less experienced designer how I would design a feature. I also contributed to the design system by designing components and writing up requirements. Lastly, I would occasionally present design centered decks to the larger Omnicell community as a whole.",
            ],
          },
        ],
      },
      "omnicell-scorecards": {
        title: "Omnicell - Scorecards",
        summary: "Updated displayed KPIs using guidance from strategists, research, and heuristic evaluation.",
        tags: ["Data Visualization", "Stakeholder Management"],
        info: {
          role: "Senior Product Designer",
          challenge: "Scorecards needed clearer hierarchy and more meaningful KPIs.",
          timeline: "Nov 2021 - Nov 2023",
          collaborators: "Strategists, SMEs, PMs",
        },
        sections: [
          { title: "Overview", subtitle: "Scorecards needed clarity", body: ["Scorecards was another Inventory Optimization Services feature adjacent to Benchmarking, but it had a different job: helping users quickly understand performance in specific operational areas. The experience needed to communicate performance quickly while still supporting detailed analysis for people who needed to dig deeper.", "My work focused on identifying the right KPIs, improving visual hierarchy, and helping the screens align with design system standards so users could understand performance without having to decode every supporting metric at once."] },
          { title: "Heuristic Analysis", subtitle: "Finding the core problems", body: ["I first started by reviewing the existing scorecards through a heuristic lens, focusing on findability, visual hierarchy, consistency, documentation, and comprehension. The analysis helped identify where the product was asking users to interpret too much at once and where important context was buried behind dense tables, repeated chart patterns, and unclear metric groupings.", "Several issues stood out quickly. The screens did not always make it clear which numbers were most important, some visualizations competed with each other, and supporting tables often appeared before users had enough context to understand why they mattered.", "This work surfaced recurring needs: clearer labels, stronger hierarchy between primary and supporting metrics, more consistent chart behavior, and a better way to understand what each scorecard was trying to communicate. Those findings became the foundation for conversations with strategists and subject matter experts."] },
          {
            title: "Discussions with Subject Matter Experts",
            subtitle: "Clarifying the KPIs",
            body: ["I met with strategists and subject matter experts to understand which metrics mattered most and which existing scorecards were not giving users enough context. Their feedback helped me separate the metrics that should drive action from the information that was useful but secondary.", "The sessions also helped clarify which ideas belonged in the current version and which ones were better suited for future iterations. That distinction mattered because some proposed metrics were valuable, but adding them too early would have made the first release harder to understand.", "Those conversations reshaped the scorecard hierarchy and made it easier to distinguish actionable information from supporting detail. They also helped me understand which patterns were useful across scorecards and which screens needed more specific treatment because the underlying decision was different."],
            media: [
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/Med_Visibility_Scorecard.png"), caption: "Medication visibility scorecard example with notes based on heuristic evaluation and SME feedback." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/Pharm_Metrics_Scorecard.png"), caption: "Pharmacy metrics scorecard example with notes based on heuristic evaluation and SME feedback." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/Purchasing_Scorecard.png"), caption: "Purchasing scorecard example with notes based on heuristic evaluation and SME feedback." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/Savings_Scorecard.png"), caption: "Savings scorecard example with notes based on heuristic evaluation and SME feedback." },
            ],
          },
          {
            title: "Design, Feedback, Redesign",
            subtitle: "Feedback changed the hierarchy",
            body: ["Feedback from strategists helped change the hierarchy of the screens. I used that input to simplify the scorecard structure, reduce the amount of competing information, and focus the experience around clearer comparisons between the most important KPIs.", "Initial feedback was positive, but it also exposed places where the screen still felt too dense or where a chart was not answering the question users cared about most. I used that feedback to reorganize content so the scorecards led with clearer summary information before asking users to interpret supporting detail.", "The redesign work was iterative. I adjusted chart placement, supporting data, and page structure based on what strategists said users needed to understand first, then kept refining the screens so the hierarchy worked within the product's existing design system constraints."],
            media: [
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/pharm_metrics_before.png"), caption: "Pharmacy metrics scorecard before strategist feedback." },
              { type: "image", src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/Pharm_metrics_after.png"), caption: "Pharmacy metrics scorecard after strategist feedback." },
            ],
          },
          { title: "Challenges Faced", subtitle: "Keeping the design practical", body: ["The biggest challenge was balancing ideal information hierarchy against implementation constraints. The best design direction was not always the easiest one to build, and some scorecards had existing data structures and technical assumptions that limited how far the layout could change.", "There were also alignment challenges because each scorecard had a slightly different audience and decision-making context. A pattern that worked well for one metric group did not always translate cleanly to another, so the design needed enough consistency to feel like a system without forcing every screen into the exact same structure.", "I worked with partners to preserve the most important improvements while keeping the experience feasible. That meant prioritizing clearer hierarchy, better KPI framing, and consistent patterns where they would have the most impact, while avoiding redesign choices that would create unnecessary development risk."] },
          {
            title: "Wrap-up",
            subtitle: "A clearer scorecard system",
            body: ["The final direction used clearer hierarchy, updated KPI framing, and more consistent design system patterns to make scorecards easier to scan and compare. It gave the team a more practical foundation for presenting performance data while still leaving room for detailed analysis when users needed it.", "The project also reinforced the importance of pairing heuristic evaluation with subject matter expertise. The audit helped identify structural problems, while strategist feedback helped determine which changes would be most meaningful in practice."],
            media: [
              { type: "image", wide: true, src: remote("/Pics/Portfolio_Pictures/Omnicell_Scorecards/pch_final.png"), caption: "Final purchasing screen." },
            ],
          },
        ],
      },
      "ford-credit": {
        title: "Ford Credit",
        summary: "Enhanced the existing customer portal experience for Ford Credit customers, including research, redesign work, and participatory design sessions.",
        tags: ["User Research", "Data Analytics"],
        info: {
          role: "Product Designer",
          challenge: "A customer portal needed clearer structure and better support for high-volume tasks.",
          timeline: "Jul 2019 - Nov 2021",
          collaborators: "Ford Credit design team, developers",
        },
        sections: [
          {
            title: "Overview",
            subtitle: "A portal needed direction",
            body: [
              "From 2019 to 2021, I worked as a product designer at Ford Credit, primarily on its customer facing portal, Account Manager. I touched all aspects of Account Manager, from registering an account to paying a bill, and helped the team identify where the existing structure was slowing customers down.",
              "Along with my Account Manager responsibilities, I taught design thinking classes for non-designers and introduction to design tools for Ford employees who were aspiring or new designers. This gave me a chance to broaden design practice beyond my immediate product work.",
            ],
          },
          {
            title: "Working on Account Manager",
            subtitle: "Product used by millions",
            body: [
              "I was the first hire for the newly formed Ford Credit design team, and was placed on the Account Manager product. During my time on Account Manager, I performed heuristic analyses, created interactive prototypes, and performed usability testing across flows used by a large customer base.",
              "One developer came to me with the statistic that one step in our account conversion process had an exceptionally large amount of exits. After breaking the content into two steps, exits from the flow at that point decreased by 50%, showing how small structural changes could have a measurable impact.",
            ],
          },
          {
            title: "Redesigning Account Manager",
            subtitle: "The structure needed rethinking",
            body: [
              "While working on Account Manager, I noticed structural issues that could not be easily fixed outside of a major redesign. Around the same time, the business had made comments about potentially redesigning Account Manager, so I started doing initial work on how the experience could be rethought.",
              "The first step was to create a survey and send it to a group of Ford employees in the United States. The survey helped identify which tasks people expected to complete first and which pieces of account information needed to be visible without forcing users to dig through the portal.",
            ],
            media: [
              { type: "image", wide: true, src: remote("/Pics/Portfolio_Pictures/Ford_Credit/Desktop.png"), caption: "Result of a participatory design session showing a desktop version of a leasing website." },
              { type: "image", wide: true, src: remote("/Pics/Portfolio_Pictures/Ford_Credit/Mobile.png"), caption: "Result of a participatory design session showing a mobile version of a leasing website." },
            ],
          },
          {
            title: "Surveys & Direct User Involvement",
            subtitle: "Themes emerged from research",
            body: [
              "The survey and participatory design work helped identify common themes across interviews and internal feedback. Participants consistently focused on payments, vehicle details, account documents, and quick access to the information they needed most often.",
              "Those findings gave the redesign a stronger foundation. Instead of starting from internal assumptions, I could use recurring user themes to justify the hierarchy and define what should appear first in the new experience.",
            ],
          },
          {
            title: "Designing on Feedback",
            subtitle: "Themes turned into wireframes",
            body: [
              "Afterwards, I created an affinity map to identify common themes across all interviews. I then started building out a wireframe that could serve as a basis for a higher fidelity prototype down the line.",
              "The wireframe brought together the most important account information, key payment actions, and vehicle details in a more scannable structure. The goal was to make the portal feel easier to orient around without losing access to the complex information customers still needed.",
            ],
            media: [
              { type: "image", wide: true, src: remote("/Pics/Portfolio_Pictures/Ford_Credit/final_wireframe.jpg"), caption: "Wireframe showing off the initial layout for a revised Account Manager." },
            ],
          },
          {
            title: "Outside of Account Manager",
            subtitle: "Design practice extended outward",
            body: [
              "While my primary day to day activities were focused on Account Manager, I also applied my UX skills outside of Account Manager through teaching classes, working on new product features, and writing product review documents with mockups, journeys, and implementation considerations.",
              "This work helped bring design methods to a broader group at Ford Credit. I supported colleagues who were new to design tools, helped teams think through product direction, and created artifacts that made product conversations more concrete.",
            ],
          },
        ],
      },
    },
  };
})();
