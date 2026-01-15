# Inbal Shani - 播客摘要

## 嘉宾简介
Inbal Shani - GitHub首席产品官(CPO);前AWS总经理、Microsoft GM、Amazon Robotics高级软件工程师;AI和机器学习领域早期专家

## 1. 核心议题
- **AI对软件开发的未来影响**: 什么被过度炒作,什么被低估
- **Copilot的设计哲学**: 为什么它成功fade into the background
- **开发者生产力指标**: 如何真正衡量AI工具的价值
- **团队如何适应AI时代**: 从"神奇发生"到working backwards的思维转变

## 2. 核心洞察

### AI的Overhyped vs Underhyped

**Overhyped (过度炒作)**:
- **"Generative AI will replace humans"**: "I don't see that happening in the near future"
  - AI cannot replace innovation - that creative spark is center of humanity
  - You always need **human in the loop**
  - "Copilot is a copilot, it's not a pilot"
- **AI is the solution for everything**: It's a tool, not magic

**Underhyped (被低估)**:
- **AI-driven testing**: "I'd like to hear more about that"
  - Unit testing, integration testing, load testing, security testing, penetration testing
  - "When you need a human to write all these testing capabilities, you need a lot of humans"
  - 随着更多code被生成,testing变得critical
  - "All companies will become a software company in some form"

### 软件开发的未来(3-5年)
- **开发者思维转变**:
  - 从focus on coding → **more systems, more architecture**
  - 理解big picture, connected experience, connected systems
  - "Junior developers can spend more time understanding the system/environment/product from the get-go" (instead of just learning to code)

- **Hardware development将更主流**:
  - AI有big footprint, requires lots of resources
  - CPUs, GPUs, compute和code optimization将更aligned across SDLC

- **AI integration becomes normal**:
  - Every developer will know how to integrate with AI
  - Shift happens very early when developers start shaping their thinking

### Copilot的Impact Stats
- **37,000+ organizations** using Copilot
- **1.5M+ developers** using it
- **Writing code 55% faster**
- **88% of suggested code was retained** (Accenture example)
- **85% felt more confident** in code quality
- **Code reviews completed 15% faster**
- **88% felt less frustrated and more focused**

### 关键洞察: 不要裁员!
- "Let me be very clear, **you cannot cut your people**"
- Developers spend <25% time writing code
- AI的价值: give them time back for
  - Write more code
  - Take a breath (avoid burnout)
  - Collaboration and creative thinking → **sparks innovation**
- "This is something you want to be able to give as a gift to your developers so they're happy"

### 产品团队常见的AI采用错误
1. **Expecting change to happen magically**: "Here's a tool, go use it"
   - 需要invest time in change management process

2. **"What should we do with AI?" vs "What problem are we solving?"**
   - Wrong: AI is here, we have to use it
   - Right: Working backwards from customer problem
   - "How can we leverage AI better to help solve the problem?"
   - Example: GitHub的approach - developers have multiple tasks, not enough time for coding → how to automate coding elements → incorporate OpenAI/ChatGPT

### Copilot的设计哲学
- **Grounding principle**: "The developer needs to want to use this tool"
- **Seamless integration**: No friction, no churn, no complexity
- 如果需要额外工具、等待、学习 → developers won't adopt
- **Developed it for themselves first** (GitHub engineers + design team + OpenAI GPT in 2020)
- Eat your own dog food: GitHub runs on GitHub, all teams use it first

## 3. 心法与原则

### Leadership Mindset
- **"If you don't take risks, you cannot create a future"** (life motto)
  - From animation Monkey Luffy
  - "If you feel comfortable, it's not a good thing. You always need to feel uncomfortable to stretch yourself"
  - Career story: Applied scientist → CPO (who knew?)

- **Continuous experimentation**:
  - "If you don't try, you will never innovate"
  - "If you don't fail, you will never learn"
  - Create bandwidth for team to innovate and experiment
  - Be okay that not every experiment will be successful

### Developer Happiness = Productivity
- **Not one metric to rule them all**: Combination of
  - Code quality (can we improve it?)
  - Security (how many secrets prevented from leaking?)
  - Developer productivity (time gain)
  - Developer collaboration
  - **Developer happiness** (ultimate metric)

- **Time is not the right metric**: "You can write really bad code really fast"
- **Better metric**: **Time to value** - from moment developer put on task until full potential/value realized
  - Could be revenue, adoption, time to market
  - Business side cares about this

### "Failing Forward" Philosophy
- Not a believer in "failure" - believer in "learnings"
- Every fail = big learning opportunity
- "You don't get here if you don't make some mistakes and do some learnings"

### Innovation Culture
- **Spend time with customers**: Their frustration/shares → innovative ideas
- **Open source community feedback**: Large and small foundations run on GitHub
- **Pitch ideas**: "I have this idea, here's research/paper" → figure out funding/bandwidth/POC
- **Flexible structures**: V-teams, specific bandwidth allocation
- **GitHub Next team**: Applied scientists/research scientists thinking 3-5 years horizon
  - Their job: "invent the future"
  - Write papers, run experiments, POCs
  - Success factors: Right people + bandwidth + synergy with product/engineering (not disconnected)

### Working Backwards Applied
- GitHub的AI思考: "What is that problem we're trying to solve and how can we leverage AI better?"
- 不是"what do we do with AI?"
- 而是"what is that problem" → "leverage AI better to help solve"

## 4. 实战手册

### AI工具采用指南
**Step 1: Change Management**
- Don't expect magical adoption
- Invest time in taking company through change management process

**Step 2: Working Backwards**
- Start with customer problem
- Identify workflow with lots of manual work/configuration
- Think how to incorporate AI to shorten time/make seamless/reduce friction
- NOT: "We wanted to plaster AI on a lot of things"

**Step 3: Eat Your Own Dog Food**
- GitHub runs on GitHub
- Finance, legal, HR teams use discussions/PRs/posts
- Nothing ships before spending months cooking inside GitHub
- "If we cannot use them, our customers cannot use them for sure"

### GitHub Next团队成功要素
1. **Right people with right mindset**
2. **Bandwidth and freedom to innovate**
3. **Focus on making things real** (not disconnected university writing papers)
4. **Synergy with product/engineering**
  - Strong relationship
  - Ideas flow both ways
  - Think about "how do we take it to production" from day zero

### Measuring AI Success
**Input Metrics** (combine them):
- Code quality improvements
- Security improvements (secrets prevented, issues found)
- Time gain
- Developer collaboration

**Output Metrics**:
- **Time to value**: From task assignment to full potential realization
- Developer happiness (hardest to measure but most important)

**Anti-patterns**:
- Don't use "lines of code" (can be bad code written fast)
- Don't use "time" alone (not quantifiable as success)

### AI的未来预测
- **Current**: Pivoted hard towards generative AI / generalized AI can solve everything
- **Future (10 years)**: Going back to niche AI
  - Hybrid world: specific AI models for specific problems + generative AI
  - Multi-models: several LLMs together (each has own benefits)
  - Niche AI: configurable/customized models for specific use cases
  - Example: Self-driving cars won't be developed on ChatGPT (delicate tuning, high safety regulations)

### Copilot作为Collaboration Tool
- Better collaboration tool vs production tool
- **Translator** bringing everyone on same page
  - Put a drawing in front → helps tell the story
  - Refine communication: "Did you mean the button here, or did you want pink, or the app?"
  - Shorten cycles of back and forth
- **Next natural language conversation**: "The same that math used to be"

### 使用AI工具的哲学
- **It's a tool. It's a language**: 就像从C → Java → Python的演进
  - "Python has it all" - but you still pick and choose
  - You don't have to use Copilot for simple code
  - Can use chat experience for brainstorming
  - Everyone chooses their own flavor
- **Delegate what you less enjoy**:
  - Like writing functions? Turn off Copilot for those
  - Don't like writing tests? Generate unit testing
  - Focus on things you enjoy

## 5. 反常识视角

### "Most amazing engineers love Copilot"
- Surprising: Not just for junior engineers
- 10X engineers say it made them 50% better/faster
- "One engineer told me it made him 50% better"

### Junior developers will think more like seniors
- 传统: Juniors write simple code while learning
- 未来: AI helps with code → juniors can spend time understanding system/environment/product from get-go
- "Today we find systems thinking more in senior developers, less in juniors"
- AI shifts this: juniors can think big picture earlier

### Testing will become AI-driven
- Underhyped area
- "If we're going to generate much more code, testing is becoming critical"
- All forms: unit, integration, load, performance, security, penetration
- "Companies need to use AI to generate larger testing suite"

### Innovation comes from everywhere
- Don't try to structure innovation: "You're losing that organic spark"
- "Imagine someone say you have 15 minutes a day to be creative. I don't think it's the pull"
- Encourage thinking vs structured
- GitHub innovation from:
  - Field team (talking to customers)
  - Product team
  - Design team
  - Engineering team
  - GitHub Next research team
  - Everywhere!

### Managing change too fast = failure
- **Failure Corner story**: TomTom, leading location-based services team
- First time in international company, didn't adjust to culture
- Saw all holes and cracks → wanted to fix everything immediately
- Team feedback: "You're moving too fast. Slow down. Explain the why."
- **Learning**: "Not everyone appreciates change the way you are"
- **Recurring theme**: Someone starting at company, trying to change too much too quickly
- **Bridge**: Communicate between what you see and what they think is fine ("Why are you driving these changes? It's been working")

## 6. 花絮与细节

### Career Path
- **Background**: Applied scientist (niche AI expert, tuning models, simulations, data ingestion)
- **Evolution**: Conversational AI → single term → multi-term → generative AI boom (caught her by surprise)
- **Roles**: Senior software developer (Amazon Robotics) → GM at AWS and Microsoft → CPO at GitHub
- **First year celebrated**: Just marked 1 year at GitHub, first GitHub Universe on stage

### Skills Development
- **Combination of learning**:
  - Learn from leaders you work for (how they think)
  - First boss (aerospace): "Think system, not just problem I'm solving"
  - Look up, look across, look down at people you manage
  - Identify skills they have that aren't in your toolbox → adopt them

- **Key skills for CPO**:
  - Business thinking (not just head of product)
  - Go-to-market strategy understanding
  - Sales play understanding
  - How engineering builds products
  - **Influencing**: Engineering team to build what you want, revenue team to sell how you envision

### Still Coding?
- "A little bit now"
- Playing with older son: Recently helped with sensors integration project, Kalman filter
- "Mommy's Copilot" joke

### Recommendations
**Books**:
- *Failing Forward* by John Maxwell
- *The Flywheel* from *Good to Great* by Jim Collins
- *Dare to Lead Like a Girl* by Dalia Feldheim (recent)

**Entertainment**:
- Loves fantasy and history-based movies
- *All the Light We Cannot See* (Netflix) - "Amazing, so well produced, interesting part of WWII history"
- *Wheel of Time* (Amazon Prime) - "Season two is wow, a lot better"

### Interview Questions
1. **"What is the most innovative thing you have done and why do you think it's innovative?"**
   - Shows character: some talk about biggest invention, others are vulnerable about personal innovation

2. **"Give me an example of a time where you had a disagreement with your manager. What did you do?"**
   - Showcases: Willingness to stand ground, push up when needed
   - Communication skills, influence skills

### Life Philosophy
- **"If you don't take risks, you cannot create a future"**
- "You always need to feel uncomfortable to stretch yourself to go to the next thing"
- Applied throughout career: From applied scientist to CPO

### Where to Find
- **LinkedIn**: Best social media platform
- Lots of talks/sessions from GitHub Universe
- Shares thinking about AI, developer experience

### How to Be Useful
- Share similar experiences/stories helpful for CPO role
- Tips and tricks on how to use GitHub (so she can learn)
- Share experiences so she can learn from them

### Biggest Surprise
- **Generative AI boom**: "I didn't expect that"
- Trained in niche AI where you must be expert, trained for years
- "Everyone that even doesn't even know what AI is, that they need to use AI" - caught her by surprise

### Favorite Part of Job
- "I'm in a very exciting part of my journey with GitHub"
- Just celebrated first year, first Universe on stage
- "Meeting our customers, our partners and talking about developer experience, our AI power platform"
- "You don't get here if you don't make some mistakes and do some learnings"

---

**Key Quote**: "Copilot is a copilot. It's not a pilot. You still need the human in the loop."

**Most Counterintuitive**: "You cannot cut your people. This is something you want to be able to give as a gift to your developers so they're happy."

**Best Advice**: "If you don't take risks, you cannot create a future. If you feel comfortable, it's not a good thing."
