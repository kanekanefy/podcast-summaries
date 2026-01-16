---
title: "Howie Liu - 播客摘要"
description: ""
pubDate: "2026-01-15"
guest: "Howie Liu"
---

# Howie Liu - 播客摘要

## 嘉宾简介
Howie Liu - Airtable联合创始人兼CEO;13年领导经验,从开发者到"IC CEO"代表;AI时代公司重塑的实践者

## 1. 核心议题
- **IC CEO趋势**: CEO重返individual contributor角色,深入产品和代码
- **AI时代的公司重塑**: 如何从legacy business转型为AI native
- **Fast vs Slow Thinking组织结构**: 创新的团队重组模式
- **产品角色演变**: PM、工程师、设计师在AI时代的新要求

## 2. 核心洞察

### "IC CEO"现象的兴起

**为什么发生**:
- AI是paradigm shift,不仅是form factor变化
- "Every software product has to be refounded"
- AI快速演变意味着每次新model release → 新的form factors和UX patterns需要被发明
- To be continuously relevant → **must be in the details**
- 不能从10,000 foot view看问题,不能只是"throw people at problem"

**Founder时期 vs 成熟期 vs AI时代**:
- **Founding moment**: Howie写front-end和back-end code,思考real-time data architecture
  - Tech was the product (不像dog walking marketplace的tech只是afterthought)
  - Intimate design decisions (architectural和UX) = product's value prop
  - Figma parallel: 2.5年building产品before launch, hands-on

- **Maturing era**: Scaled up, learned to build teams/organizations
  - Got further away from details by default
  - "Blunt instruments" to scale: blunt roadmap, blunt GTM
  - Focus on scaling existing thing vs finding magical new product-market fit details

- **AI now**: Refounding moment
  - Must be of details again
  - Can't look at screenshots or pre-recorded videos
  - **Must play with AI** to understand solution space
  - Like chef gaining new ingredients → must get comfortable with them

**Chief Taste Maker角色**:
- "Hard to taste the soup without participating in creating it"
- Look at final product: feels right? bold enough? properly productizing capabilities?
- **Must understand solution space**: what's possible?
- AI必须play with:
  - Packaged app/solution you built
  - Underlying primitives (API or chat interface)
  - Push to boundaries
- **Dan Shipper's signal**: "Does CEO use ChatGPT/Claude daily?"
- Howie: **#1 most expensive inference cost user** of Airtable AI (within company, globally across customers for a long time)
  - "Extremely intentionally wasteful"
  - Example: LLM calls on long sales call transcripts to extract insights
  - LLM map reduce: break into chunks, call on each, aggregate call
  - **Cost**: Hundreds of dollars
  - **Value**: "Like a really smart chief of staff read every sales call, giving product/marketing/positioning/segmentation insights"
  - **Could pay consulting firm millions** for same quality
  - "Value vs actual cost is crazy ratio. More people should aggressively throw compute cycles at high value problems."

### 公司重组: Fast vs Slow Thinking

**传统结构的问题**:
- Proliferated into groups responsible for feature/surface area
  - Search within table
  - Mobile experience
  - Each team ramps up on that part of codebase/product
- **Disadvantage**: Think incrementally
  - Each remit = feature to incrementally improve
  - Not thinking about mission/outcome requiring coordination across surface areas

**第一次重组**: Business units
- Enterprise: scalability, large datasets, 10k-20k seats, architecture
- Teams filler: self-serve, product UX, adoption, onboarding, sharing
- AI pillar, solutions pillar, infra
- **Result**: More holistic bets, but still not aggressive/fast enough for AI native

**当前结构: Fast Thinking vs Slow Thinking** (Kahneman reference)

**Fast Thinking Group (AI Platform)**:
- **Mission**: Ship bunch of new capabilities **near weekly basis**
- Each should be **"drop your jaw awesome"**
- How would AI native company (Cursor, Windsurf) execute?
- Are we executing as fast as them?
- Requires:
  - Autonomy
  - Entrepreneurial nature (not literally former founder)
  - Think **full-stack** about problem and UX
    - Problem = not just technical layers
    - Also: what's the wow factor?
  - Not overwhelmed by open-endedness, **relishes in it**
- Example: Describe app → iterate with Omni → builds it → can do code gen for bespoke functionality
  - "Generate me specific map view with heat mapping, icons, click behavior"
  - So much ambiguity in design decisions
  - Must blend design thinking + technical constraints (what can models one-shot effectively?)
  - Add right human workflow for approval/review

**Slow Thinking Group**:
- Not better/worse, just different mode
- **More deliberate**, requires more premeditation
- Can't ship new infrastructure in week/hacky prototype
- Example: HyperDB data store handling multi-hundred million record datasets
- **Complementarity**:
  - Fast execution (AI) = **top of funnel excitement**
  - Inspires new use cases/users (including enterprise)
  - Slow thinking = **allows adoption seeds to sprout and grow into larger deployments**
  - Challenge for AI native companies: wide top of funnel (AI tourist traffic), but how to turn into durable growth?

**为什么这种结构work**:
- Fast + Slow needed for humans to operate
- Fast creates excitement and new use cases
- Slow enables those to scale and retain
- AI native companies often struggle with retention/expansion

### AI Native vs AI Wrapper

**Key Question**: "If you were literally founding a new company from scratch with the same mission, how would you execute on that mission using a fully AI native approach?"

**Clean slate approach**:
- Do you have useful building blocks from existing product/business?
- Or are you worse off having legacy asset vs starting from scratch?
- **If you can't introspect and say you're better off with existing pieces**:
  - **You should sell**
  - Find a buyer
  - If you really care about mission → start next incarnation

**Howie's analysis for Airtable**:
- Original vision: democratize software creation (more users than builders)
- **Advantage**: No-code components as primitives
  - Agent can manipulate/use without writing code from scratch
  - "Beautiful CRUD interface on data layer"
  - Real-time collaborative
  - Other view types, layout engine, automations, business logic
  - **Like domain-specific language (DSL)** for building business apps
  - Instead of writing SQL/HTML/JavaScript for everything

**Problem with pure vibe coding for business apps**:
- Agent generates everything from scratch = unreliable
- Bugs, data/security issues
- Context collapse as app gets complex
- Can't manage all code it wrote

**Airtable's hybrid approach**:
- Reliable, high-quality Lego pieces
- Agent assembles them (vs user using GUI)
- Non-technical users can still understand/participate (fallback to GUI)
  - Unlike v0/Lovable/Revolut where code is opaque
  - If you can't re-prompt, you're stuck
  - Like developer using Cursor: generate code + drop to IDE to edit to production-ready

**If Howie didn't believe this**: "I wouldn't be running this company in its form today"

### PLG vs Sales-Led in AI Era

**Insights**:
- Both PLG and sales-led can work (Palantir AIP, Harvey)
- **Best way to get AI value out there: experientially**
- Sales motion: demo, POC
- **PLG is more powerful**: Open doors, "Anyone can sign up and trial"
- **ChatGPT proof**:
  - Most successful PLG product ever (700M weekly active users)
  - 10% of humans on earth use it weekly
  - Under 3 years!
  - Wouldn't get there if couldn't try product
  - Early days: people tried to stump it, showed "not that smart"
  - But magical nature appealed, everybody used it

**Airtable's shift**:
- Started as PLG darling
- Moved up market, sales execution
- Now shifting attention back to **builder-led adoption**
- Show in product experientially, not tell in deck
- **Made entire product experience AI-centric**:
  - Was: secondary sidebar assistant
  - Now: agent is default way of doing everything
  - Airtable app = artifact manipulated/used by agent

### Form Factor Evolution with Model Capabilities

**Evolution timeline**:
- **GPT-3.5 era**: Models not smart enough
  - Right form factor: GitHub Copilot (auto-complete few lines)
  - Couldn't "build me entire app from scratch"

- **Models got better**:
  - Cursor pioneered agentic way for more complex things
  - Generate larger chunks of code

- **Composer (Cursor)**: "Build me 3D shooter game from scratch"
  - Watch it create files, fill them out
  - Thing actually runs some of time

- **This is where world is going**: Models getting smarter → new form factors emerge

**Under-merchandised AI capabilities**:
- "So many awesome capabilities of AI, most are really under-merchandised"
- "Poor visual or other metaphors/affordances to help represent/understand capabilities"
- ChatGPT: blank chat box (now suggestions underneath)
- Howie's product UX passion: **Craving more visual metaphors/colors**
  - Use canvas of web interface richness
  - Show all different states, use colors to play them up

### "IC CEO"的Day-to-Day

**时间管理转变**:

**Cut 1:1 roster by default**:
- Not because don't want to spend time with people
- Standing 1:1s preclude timely, topical meetings
- **Best meetings = urgency driven**
  - Timely topic + insight/alpha
  - Discovered insight from startup/product
  - Bring to how we think about new feature
  - Plant seed with EPD people

**Barbell approach**:
- **In-person**: Proper catch-up (less structured, less timely, building relationship)
  - Longer lunch or coffee walk
  - Once every month or two
- **In-betweens**: Topical
  - Weekly AI execution sprint check-in
  - Half of EPD org working on AI capabilities
  - Ship very quickly
  - Always ask: "How would AI native company execute? Are we as fast?"

**Daily activities**:
- Use as many different AI products as possible (not just Airtable)
  - Novelty factor + new demos
  - Runway immersive world engine
  - Hume AI interactive voice chat
  - Even if not core to capabilities → want to understand/feel everything

- **Weekend/side projects**:
  - Force reason to use products
  - Example: Funny video short using HeyGen avatars + AI-generated script + AI deep research
  - Takes 1 hour if proficient
  - "Useful construct to force myself to try products in more than Twitch click way"

- **Benefits**:
  1. **Understand models** (GPT-5 came out yesterday, play with it)
  2. **Understand product form factors**:
     - Structured application
     - Tool calling vs ChatGPT out-of-box
     - Agentic workflow vs ChatGPT out-of-box
  3. **Inspire on product form factors** these models can take
  4. **Fun/entertainment**: "Not perfectly predictable, like box of chocolates"
     - "Wow, 5 years ago we didn't have any of this"

### 对团队的期望调整

**核心: "Go play with this stuff"**:

**Psychological sense of play**:
- Difference: checking box to get job done vs curiosity/exploring
- More fun, energizing, learn more

**Lead by example**:
- Share links/screenshots of things doing in various products
- Built marketing landing page in Replit → share link (vs write doc)
- Share deep research report links
- Share chat thread output instead of perfect memo
- Expose using AI, show how prompting

**Permission to experiment**:
- "Cancel all your meetings for a day or week"
- "Go play around with every AI product relevant to Airtable"
- "You could use me as ultimate excuse"

**Prototypes over decks**:
- Want interactive demos
- Deck/PRD: "We'll make Omni really good at X" = just words
- **Real proof**: Try on realistic prompts
- Demo: instantly try on non-golden-path scenarios
  - Too slow?
  - Need to expose reasoning/steps?
  - Progress bar?

**Shift from deterministic to experimentation**:
- Past: Resourcing + timelines view
  - X people on problem
  - 8-week timeline
  - Ship in quarter
- Now: **Experimentation and iteration-driven playground**

## 3. 心法与原则

### 核心价值观

**Growth Mindset**: Most important core value
- "I like to believe in growth potential of any human and any individual"
- If you have growth mindset + willing to put in nights/weekends (or take day/week off with permission)
- **You can become more fluent in this way**
- People who jump on train become more and more effective

**Play and experimentation**:
- Not checking boxes
- Psychological play = curiosity + exploring
- Learn more through play

**Urgency and speed**:
- Always ask: "Is this maximally accelerated?"
- "How would AI native company execute?"
- Fast thinking group: weekly shipping
- Weekly sprint check-ins

### Career Philosophy

**Product UX as passion**:
- "I consider myself at core a product UX person"
- Everything else = necessary part of journey
- UX ≠ just cosmetic design (Framer prototypes)
- UX = "What should this product do and how should it represent/behave for user?"
- That IS the product
- Then figure out technically what's possible/how to implement

**Under-merchandised AI insight**:
- "So much awesome capability, really poor metaphors/affordances"
- Craving visual metaphors, colors, canvas richness
- Represent/show all different things you can do with underlying model

### Decision Framework

**The "Refounding" Question**:
- "If you were literally founding new company from scratch with same mission, how would you execute using fully AI native approach?"
- Do you have useful building blocks?
- Or worse off with legacy assets?
- If can't say you're better off → sell and start next incarnation

**Usage as signal**:
- Dan Shipper: "Does CEO use ChatGPT/Claude daily?"
- Howie: Measures by inference cost/tokens used
- "I'm proud to be #1 most expensive inference cost user"

## 4. 实战手册

### Becoming an IC CEO

**Daily practices**:
1. **Use AI products extensively**:
   - Not just your own
   - Every new demo/capability
   - Weekend projects to force usage

2. **Be intentionally wasteful with compute**:
   - Spend hundreds of dollars on LLM calls
   - Extract insights from sales calls (product/marketing/positioning/segmentation)
   - Value vs cost ratio is insane
   - "More people should aggressively throw compute cycles at high value problems"

3. **Lead by example**:
   - Share what you build (prototypes, landing pages, research)
   - Expose your prompting techniques
   - Show not tell

4. **Restructure time**:
   - Cut standing 1:1s
   - Make meetings topical + urgency-driven
   - Weekly AI execution sprint reviews
   - Barbell approach: long in-person catch-ups + frequent topical syncs

### Team Restructuring: Fast/Slow Thinking

**Implementation**:
1. **Fast Thinking Group (AI Platform)**:
   - Mission: Ship near weekly
   - Each feature = "drop your jaw awesome"
   - Hire for: autonomy, entrepreneurial nature, full-stack thinking
   - Focus: top of funnel excitement, new use cases

2. **Slow Thinking Group**:
   - Mission: deliberate, premeditated work
   - Infrastructure, data complexity, scalability
   - Focus: let adoption seeds sprout into large deployments

3. **Complementarity**:
   - Fast creates excitement/seeds
   - Slow enables growth/retention
   - Both needed for complete AI native strategy

**Hiring for Fast Thinking**:
- Look for: autonomy, entrepreneurial
- Not literally former founders (but that helps)
- Think full-stack: problem + UX + wow factor + technical constraints
- Not overwhelmed by open-endedness, relish in it

### Skill Development for Product Team

**PMs**:
- Need to look more like **hybrid PM prototyper**
- Good design sensibilities
- Get technical (study how models work, tool calling)
- Not just writing documents/PRDs
- Hands-on with tools

**Designers**:
- Be technical enough to be dangerous
- Understand how models work, tool calling
- Design must be more interactive
  - ChatGPT design = basic
  - Real design = how it responds to queries, what happens after prompt
- Can prototype in prototyping tools (without coding)

**Engineers**:
- Think about product and experience
- Can prototype whole thing
- Stripe culture: DRI sometimes engineer, not always PM
- Good enough at product/business requirements

**Cross-functionality**:
- "You need to get decently good at all three"
- Minimum baseline in other two
- Then go deeper in your specialty

### Learning Through Play

**Approach**:
1. **Weekend/side projects**:
   - Pick something useful + fun
   - Forces you to use tools
   - Example: Video using HeyGen + AI script + AI research
   - Only takes 1 hour if proficient

2. **Study prior art**:
   - Like industrial designer studying chairs
   - Go look at best products, sit in them, reverse engineer
   - "Go out and play with these products"

3. **Build your own**:
   - Can't just look at others' chairs
   - Build your own weekend projects
   - Trial and error
   - Test technical skills + design affordances

**Work applications**:
- Field agents team example:
  - "Infinite number of superpowers you can give agents"
  - "I'm not being prescriptive which watermelons to pick"
  - "Go experiment and prototype"
  - Example: Deep research on podcast guests side-by-side in table

### Prototyping Culture

**From decks to demos**:
- "Prototypes over decks"
- Want interactive demos
- Try realistic prompts (not just golden path)
  - Too slow?
  - Need progress bar?
  - Expose reasoning?
- Functional prototype that actually uses AI

**Lead by example**:
- Build landing pages in prototyping tools (Replit)
- Share links vs docs
- Share deep research outputs
- Expose prompting techniques

## 5. 反常识视角

### "You should sell if..."
**Hard truth**: "If you can't introspect and say you're better off with your existing product pieces, you should find a buyer. If you really care about this mission, go start the next incarnation."

Most founders wouldn't say this publicly. Howie's radical honesty about when to sell vs persevere.

### Be "intentionally wasteful" with AI compute
**Anti-frugal advice**: Spend hundreds of dollars on LLM calls for insights
- Most companies optimize to save money
- Howie: "Value vs cost is crazy ratio"
- "More people should aggressively throw compute cycles"
- Example: $1 per deep research call vs paying human $400-500
- "What a deal"

### Cut 1:1s to be more effective
**Counterintuitive**: Less structured time = more impact
- Standing 1:1s prevent timely topical meetings
- Barbell approach: Long in-person catch-ups + frequent topical syncs
- Focus on urgency and alpha, not routine

### The best product people use AI hourly (literally)
**Dan Shipper insight**: "Does CEO use ChatGPT/Claude daily?" is signal of company success
- Howie takes it further: Hourly usage
- Measures by inference cost/tokens
- Proud to be #1 most expensive user

### Fast vs Slow thinking organizational structure
**Novel approach**: Literally split company into fast/speed groups
- Inspired by Kahneman's Thinking Fast and Slow
- Fast: Weekly shipping, jaw-dropping features
- Slow: Deliberate infrastructure, premeditated work
- Not better/worse, both needed
- Complementary: Fast creates funnel, Slow enables scaling

### Vibe coding problems for business apps
**Insight**: Pure AI-generated code = unreliable for business
- Bugs, security issues, context collapse
- Need primitives/components (like Airtable's)
- Agent assembles them vs generates from scratch
- Like DSL for business apps vs SQL/HTML/JS
- More reliable, non-technical users can still understand

## 6. 花絮与细节

### Career Timeline
- **13 years** at Airtable
- Founded ~2011-2012 (parallel to Figma)
- 2.5 years building product before launch (hands-on with early team)

### Personality & Approach
- Considers himself "product UX person at core"
- Everything else learned = necessary journey
- Passion for thinking about product UX in deep sense (not just cosmetic)

### Favorite things about AI
- "Delight and entertainment value to using AI"
- "Not perfectly predictable, like box of chocolates"
- "Wow, 5 years ago we didn't have any of this"
- Always blows his mind thinking about progress

### AI Products he plays with
- **Runway**: Immersive world engine
- **Hume AI**: Interactive voice chat
- **HeyGen**: Avatar generation
- **ChatGPT/Claude**: Daily usage, research, prototyping
- **Deep research**: Uses for podcast guest research (side-by-side comparison)
- **Cursor/Windsurf**: AI native development tools

### "Watermelons on the ground" metaphor
- "We have all these fruit trees"
- "Crazy low-hanging fruit"
- "Massive watermelons sitting on ground"
- "Just walk over 20 feet and pick up vs climb tall coconut tree"
- Used to describe AI opportunities at Airtable

### On being "AR/VR curious"
- Tried many AI products for novelty factor
- Even if not near-term need for capabilities
- Want to understand/feel everything out there
- Example: Realistic interruptible voice mode (not core to Airtable)

### On Twitter/social media
- Likes post-Elon Twitter more than pre-Elon
- Admires bold product execution
- Gets "injected with sensational content" in feed
- "Works on me, can't help but click and engage"
- "Results in this kind of content really spreading"

### On the viral "Airtable is dead" tweet
- CB Insights employee with incorrect numbers
- Revenue scale off by "strong multiple"
- Growth rate wrong
- Same person tweeted "Flexport is dead"
- All In podcast covered it (later issued correction)
- Learned: "Memes and morality very quickly"
- Lie travels around world before truth gets out of bed

### Comparison to Figma
- Parallel timeline (both founded ~2011-2012)
- Both spent 2.5 years building before launch
- Both tech-heavy products (tech was the product)
- Both now refounding for AI era

### On PLG (Product-Led Growth)
- Airtable was "one of PLG darlings of our era"
- Moving up market, sales execution
- Now shifting back to builder-led adoption
- Showing experientially in product, not telling in deck

### On competitors
- Studies competition in mature SaaS (Salesforce, ServiceNow)
- AI era: "Major releases every week, not every year"
- Must stay abreast of all of it
- Must experience, not just read TechCrunch/tweets

### On using AI for podcast prep
- Uses Claude to research guests
- "What questions have other hosts asked?" (avoid duplicates)
- Brainstorm title ideas
- Get feedback on writing
- Synthesize user research, support tickets, sales calls, experiment results

---

**Key Quote**: "If you were literally founding a new company from scratch with the same mission, how would you execute on that mission using a fully AI native approach? If you can't, then you should find a buyer and then if you really care about this mission, go and start the next incarnation of it."

**Most Important Metric**: "Does the CEO use ChatGPT or Claude daily?" (signal of company AI success)

**Best Advice**: "Go play with AI products. Be intentionally wasteful with compute. The value vs cost ratio is insane."
