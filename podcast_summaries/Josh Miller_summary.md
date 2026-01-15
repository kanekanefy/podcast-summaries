# Josh Miller - 播客摘要

**嘉宾简介**: Josh Miller - The Browser Company CEO & 联合创始人,Arc浏览器创造者,前Facebook PM、Thrive Capital投资人

---

## 核心议题

1. **"优化感受"vs"优化指标"** - 在产品开发中,应该优先考虑用户体验的情感维度还是数据指标?
2. **公司价值观的可操作化** - 如何将抽象的价值观转化为每天的产品决策和团队行为?
3. **在公开中构建信任** - 为什么要分享公司内部会议、board meetings等通常保密的内容?
4. **"没有PM"的产品组织** - 如何在没有传统PM角色的结构下构建和迭代产品?

---

## 核心洞察

### 新颖洞察

- **"Metrics are the tail, feelings are the dog"** - Silicon Valley过度痴迷于图表和指标,但伟大的产品(Walt Disney的Disneyland、Phil Knight的Nike鞋、Steve Jobs的iPhone)在创作时刻都optimizing for human feelings而非numbers。指标用于honesty check,但creation时刻应该focus on "how do we want people to feel?"

- **"D5/D7作为North Star Metric"** - 不关注DAU或WAU,而是obsess over "how many people use Arc 5+ days a week"。这个单一metric同时captures retention(必须重复使用)、engagement(一周5天是serious commitment)、growth(总数)。当前retention在30-40%之间,且持续improving cohort over cohort

- **"Our product is our team, not Arc"** - 公司的genesis是"build dream team"然后找something to work on,而非反过来。这解释了为什么能吸引Chrome创始人、Slack设计VP、Vimeo产品SVP等senior people加入作为IC。他们来这里because "this work will define my career"

- **"Values as mirror, not mandate"** - 公司价值观通过interviewing every team member提炼,每个词都来自团队自己说的话。写成"Notes on Road Trips"故事而非corporate propaganda list,因为传统values感觉像Panda Express fortune cookie

### 具体比喻

- **"Membership team" vs "Customer Support/User Research/CS"** - 传统公司将关系碎片化为different orgs,但The Browser Company认为"从用户第一次touch product到last touch,这是one holistic relationship"。一个human在不同day可能need不同thing,但应该是same team owning full relationship

- **"Storytelling team" as "marketing+PR+investor relations"** - 与其按传统职能划分,不如按"我们试图serve谁?"来organize: membership team = already using Arc; storytelling team = haven't discovered us yet(investors, press, potential users)

- **"Assume you don't know" → "default to action"** - 像drop进新城市,不能一直plan,必须turn left or right然后see what you find。即使Chrome 16年veteran也embody beginner's mind

- **"Convincing people NOT to join"** - Interview目标实际上是"talk them out of it",因为most people shouldn't want to work there(hard, intense, not for everyone)。这attracts right people and filters early

### 保留的英文术语

- **Heartfelt intensity** - 每个人show up with "fire in belly"和"something to prove",但manifestation不同(有人obsess UI craft,有人care engineering performance)
- **D5/D7** - 使用Arc至少5/7天的用户数,核心growth+retention metric
- **PEEK feature** - 鼠标hover link预览,解决Hacker News等场景的rapid context switching
- **"Start by asking 'What could be?'"** - Push to be as aspirational as possible,不只solve problem但blur line between native and web
- **"You're doing it for the crew" / "When you got to swarm"** - 集体优先,drop individual ego

---

## 心法与原则

1. **"Optimize feelings, not metrics"** - 使用感受作为top-level intentionality:"do we want people to feel joy? speed? organized? focused?" Surprise/joy → people tell friends → growth。正确feeling通常tracks with metric你care about

2. **"Ship your values"** - 快速shipping不是tactic而是values的manifestation: heartfelt intensity + assume you don't know + start with "what could be" = "let's get something out there and see what happens"的culture

3. **"Celebrate makers, not CEO-hero worship"** - 每个ship都publicly celebrate具体people who built it。"Alexandre killed it! Look how cool this is!"而不是CEO claiming credit。这creates reinforcing cycle of "I'll be recognized for my work"

4. **"Prototype everything, including org structure"** - No PMs不是dogma而是prototype。"Assume it's not going to work然后learn and adjust"。Snap也said never hire PMs,现在hired lots。承认"this is the one I'll come back in 2 years being 'you were right, it blew up'"

5. **"Radical trust-building over radical transparency"** - Sharing board meetings等不是为了transparency transparency,而是because "tech has broken trust repeatedly"。当people know us as humans with imperfections,当ask for permission时they trust intentions are better

---

## 实战手册

### 优化感受而非指标的具体做法

**Step 1: 定义Project的核心感受**
- 团队meeting讨论:"在这个scenario,we want people to feel what?"
- Peek feature的答案:"light, airy, effortless, speed, agility"(因为use case是Hacker News rapid checking URLs)
- 不是formal PRD列出emotion #1 #2,而是conversational:"what's the feeling we're evoking?"

**Step 2: 验证Feeling → Metric alignment**
- Hypothesis: "如果people feel surprise/joy,他们会tell friends → organic growth"
- Implement feature that creates that feeling
- Measure: D5/D7 growth rate(week over week)
- Check: 是否positive emotion导致了metric movement?

**Step 3: 使用Metrics作为Honesty Check**
- Metrics不用于creation但用于validation
- 问自己:"Are we achieving the feeling we aimed for?"
- Example: 如果aim for "light/airy"但people report "clunky",需要adjust

**常见Feeling → Metric Mapping:**
- Joy/Surprise → Word-of-mouth, referral growth
- Efficiency/Productivity → Session frequency, task completion
- Trust → Permission grant rate, data sharing
- Delight → Retention, NPS(though Josh didn't mention NPS)

### 建立"Optimizing Feelings"的Culture

**Weekly Rituals:**
- Design reviews: "What emotion are we trying to evoke?"而非"Does this satisfy requirement?"
- User feedback sessions: "How did this make you feel?"而不只是"Would you use this?"
- Retrospective: "Did we make people feel [intended emotion]? How do we know?"

**Hiring for Feeling-Obsession:**
- Interview问:"What's a product that made you feel something? What was that feeling?"
- Look for: candidates who can articulate emotional experiences, not just functional benefits
- Warning sign: 只talks about metrics, conversion, growth without mentioning user experience

**Leadership Modeling:**
- CEO/leads公开discuss:"I felt X when using this feature"
- 在decision meetings问:"How will this make users feel?"而非"How will this impact D5?"
- Celebrate emotional wins: "User tweeted they felt delighted!"

### 快速Shipping的具体做法

**每周五Ship Cadence:**
- Hard deadline creates focus and prioritization
- Smaller scopes → faster iterations → more learning
- Public celebration creates positive pressure

**Value-Driven Prioritization:**
- "Heartfelt intensity" → team intrinsically motivated,不需要micromanagement
- "Assume you don't know" → 偏向action vs. over-planning
- "What could be?" → ambitious goals激发best work
- "Swarm" → collective accountability,不bottleneck on one person

**Removing CEO from Product Process:**
- Josh在2023年1月开始step back
- Result: healthier, faster decision-making
- Team takes more ownership
- CEO focuses on hiring, storytelling, culture

### 建立Values的实战流程

**Phase 1: Pattern Recognition (3-6 months)**
- 1-on-1 check-ins: "What's going well? What do you love about working here?"
- 不suggest values,只是listen for recurring themes
- 记录exact phrases people use

**Phase 2: Team-Wide Interviews**
- Interview every team member(约3个月process)
- No surveys,只有conversations
- 问:"What defines The Browser Company's way of working?"

**Phase 3: Synthesis into "Mirror"**
- 提炼recurring phrases
- 每个value应该有team member的exact words
- For Browser Company: 5个values,每个都来自team

**Phase 4: Creative Expression**
- 写成"Notes on Road Trips"essay而非bullet points
- 用semi-fictional story(father-teenager road trip)illustrate values
- Takes ~3 months,team effort(不just CEO)

**Phase 5: Living Values**
- 不是post on wall就forget
- 每个decision可以trace back to value
- New hire onboarding: read the essay, discuss how it manifests

### "No PM"组织结构的运作方式

**Project-Based PM Assignment:**
- 每个project有"PM role"但不是固定person
- Performance project → infrastructure engineer as PM
- User-facing feature → membership team person as PM
- Principle: "谁能最好serve this project's goals?"

**Hiring "Muts"(多面手):**
- Look for: "I make things, I'll do whatever it takes"
- Rebecca example: MIT PhD(behavioral psychology) + Stripe engineer + now data lead who PMs multi-player team
- Avoid: "I'm a PM who only does PM things"

**Current Reality & Future Evolution:**
- 已经hiring 2-3 people with PM background
- 可能evolve data team → "technical PM or data + PM"
- 承认会break down: "designers say 'PM verbs taking my time, I want to design'"
- Unwavering principle: PM应该be "people who make things with diverse tools,"不just PM discipline

### Building in Public的具体实践

**What They Share:**
- Board meeting recordings(完全unfiltered)
- Project delay meetings(real conversations about slipping timelines)
- Reaction videos(like MKBHD first trying Arc)
- Hiring celebration posts(详细介绍new hire as person)
- Feature ship posts(具体credit到individuals)

**Why It Works for Trust-Building:**
- "Tech has broken trust repeatedly"
- 当people know CEOs as humans with imperfections → more likely to trust permissions
- Not radical transparency但radical trust-building
- Alternative interpretation risk: 某些人think "they're trying to be internet celebrities"

**Guardrails:**
- CEO self-awareness about being too central to story
- Intentional spotlight on team members, not just founder
- Authenticity over performance(even if sometimes comes off wrong)

**Risks & Mitigation:**
- Risk: Becoming "CEO personality cult"
- Mitigation: "Tag Sherry. Sherry made that" culture
- Risk: Over-sharing creates competitive disadvantage
- Mitigation: Still competitive secrets, just radical on human side
- Risk: Misinterpretation by people who don't know you
- Acceptance: "We'd feel the same in their shoes due to past tech betrayals"

### Storytelling Team的具体构成

**3-Person Team Makeup:**
1. **Nash (Lead)**: NBC stint + poet + aspiring fiction novelist → "force of nature"
2. **Ellis**: The Verge reporter + 7 years at Snapchat marketing strategy → journalist background
3. **Josh Lee**: Facebook design intern → White House intern → indie filmmaker → video editor

**Intentional Diversity:**
- Radically different archetypes(homogeneity easier but less innovative)
- Shared values but different sensibilities and backgrounds
- Harder to manage but leads to more creative output

**Why This Structure Works:**
- Not just "make TikTok account go viral"
- Holistic thinking about "people we haven't served yet"
- Bridges marketing/PR/investor relations/press into one cohesive narrative
- Similar to early Airbnb video team(3 people: videographer, editor, producer)

### 面试的独特方法

**"What would you like to ask me?" Approach:**
- 整个interview是"ask me anything"
- 观察what they ask + how they follow up
- Reveals more about who they are and what they care about than any prepared question

**Looking for Authenticity:**
- "Do they really believe what they're saying?"
- 过度rehearsed answers是red flag
- Genuine curiosity > trying to impress

**"Talk them out of joining" Philosophy:**
- Most people shouldn't want to work here(intense, demanding)
- Transparency about challenges filters early
- People who still excited after hearing downsides are right fit

---

## 反常识视角

1. **"Optimizing for feelings is practical, not romantic"** - For browser market(commodity + consumer + lucrative), emotional connection is how you win, not optional flourish。这不是idealism而是capitalism: products are interchangeable, so brand love = competitive advantage

2. **"Naming things weirdly unlocks first-principles thinking"** - "Membership team" vs "Customer Support/Success/Research" forces rethink what we're actually doing。Producer vs PM at Airbnb same effect: when you don't know what it "should be," you ask deeper questions。这是rhetorical tactic to shed preconceived notions

3. **"The best PMs might be people who aren't PMs"** - Rebecca example: behavioral psychology PhD + Stripe engineer → more interesting PM perspectives than career PM。Multidisciplinary background leads to more creative problem-solving

4. **"CEO stepping back accelerates shipping"** - Counterintuitive但Josh's experience: removing CEO from product process made things healthier and faster。Bottlenecks often at top, and "founder intuition" sometimes slows team down

5. **"Customer loyalty in browser market is irrational, so optimize for irrationality"** - Browsers are technically interchangeable(commodity), so rational choice would be "whatever is default." Winning requires emotional connection that overrides rational assessment, just like Nike/Apple/Disney

---

## 花絮与细节

### 个人习惯与日常实践

- **Reading taste**:
  - *Harold and the Purple Crayon* (children's book about creativity)
  - *Seeing Is Forgetting the Name of the Thing One Sees* (Robert Irwin biography) → "my #1 PM book"
  - *God Saved Texas* by Lawrence Wright (politics, culture, road trips)

- **Media diet**:
  - The Last of Us Episode 3 (first TV show to make him cry recently)
  - Adam Curtis documentaries (especially *HyperNormalization*) → "video art more than documentary"
  - Re-watching all Adam Curtis on YouTube

- **Career journey**:
  - Started first company with Hursh (current CTO) at age 20
  - Company acquired by Facebook, worked as PM there
  - Spent 2 years at Thrive Capital as VC investor
  - Never cared about browsers before this ("if you told me I'd work on browsers at 32, I'd ask 'what went wrong?'")

### 推荐工具与产品(附理由)

**Products The Browser Company Uses:**
- **Linear**: "We've run on Linear since day one" → issue tracking, beautifully designed
- **Tuple**: "Closet hit I can't believe isn't 100x larger" → ostensibly pair programming but actually "fastest way to talk to colleague," best audio quality he's experienced (better than Zoom)
- **Notion**: Company runs on it
- **Arc**: Obviously (they built it)

**Why These Tools Matter:**
- All share "craft bar" obsession with user experience
- Tuple example: great design + latency excellence (both required for success in their category)
- Demonstrates "pick market where what you excel at is how you win"

### 趣闻与独特观点

- **Origin of company name**: "The Browser Company of New York" is "almost as a misdirection" because they're building more than a browser
- **Interview story**: When asking Chrome co-creator Darren why he joined, he said "I want to do work that defines my career" (despite already doing remarkable things)
- **Snow White storyboard connection**: Early career visit to Airbnb office, saw Pixar-drawn storyboards lining walls based on Snow White, depicting host/guest journey. This inspired "optimize for feelings" approach
- **General Magic documentary**: Josh views it not as "missed opportunity" but as "if only we could be so lucky to assemble such people." Nostalgia + passion > business success. What they went on to create matters more
- **"Internet Computer" vision**: Believes computing is shifting to cloud/internet completely. In 5 years, all "stuff" will be URLs, devices become empty shells. Arc wants to be "iPhone for the internet" → replaces browser but much more. Long-term: Arc as development platform more interesting than first-party computer
- **Future business model**: Browser companies "print cash" but current ones have perverse incentives. Apple doesn't want web apps (30% tax), Google doesn't want immersive extensions (can't index). Opportunity: build interface to internet that enables web to be as rich as native, then platform play on top

---

## 核心语录

> "We don't optimize for metrics, we optimize feelings. How do we want to make someone feel on the other end of our software?"

> "D5/D7 captures retention, engagement, and growth in a single metric. You can't game it."

> "Our product is our team, not Arc. We wanted to build our dream team and then find something to work on."

> "The iPhone replaced your cell phone, but it was really something much more. We want Arc to be the iPhone for the internet."

> "We're a prototype-driven culture. We try things, and we're totally willing to be wrong."

---

## 总结

Josh Miller和The Browser Company代表了一类新兴的"craft-obsessed"公司(Linear, Raycast, Cron等),其核心insight是:对于commoditized consumer software,best way to differentiate和win是通过emotional connection和user experience excellence。

这不是romantic idealism而是pragmatic strategy:
- Browsers are technically identical (chromium-based)
- Everyone uses them (universal consumer software)
- They're incredibly lucrative if you get adoption
- Only way to win: make people love you enough to switch from default

Their approach flips traditional Silicon Valley wisdom:
- **Metrics → Feelings**: Use metrics as honesty check, not creation compass
- **Growth teams → Values-driven culture**: If team has heartfelt intensity + autonomy, they'll ship remarkable work
- **Secretive → Radical trust**: Share internal workings because tech broke trust
- **PM hierarchy → Project leadership**: Assign PM role based on project needs, not org charts
- **Corporate values → Living stories**: Write "Notes on Road Trips" not fortune cookie phrases

This approach works because:
1. 它attracts amazing talent who want to do career-defining work
2. 它creates products users emotionally connect with
3. 它builds trust through authenticity and vulnerability
4. 它enables fast shipping through intrinsic motivation
5. 它differentiates in commodity markets through brand love

The ultimate vision extends beyond browsers: "internet computer" for cloud computing era, where Arc becomes platform like iOS was for mobile. Whether they succeed or fail, they've demonstrated that building with heart, craft, and humanity can be both fulfilling and commercially viable in software.
