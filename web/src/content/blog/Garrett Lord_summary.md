---
title: "Garrett Lord - Handshake创始人兼CEO"
description: "---"
pubDate: "2026-01-15"
guest: "Garrett Lord"
---

# Garrett Lord - Handshake创始人兼CEO

**嘉宾简介**: Garrett Lord是Handshake创始人兼CEO，公司十年内达到2亿美元ARR，2024年1月推出AI数据标注业务，4个月内即达5000万美元ARR，预计12个月内突破1亿美元。

---

## 1. 核心议题 (The Questions)

- 当AI模型训练从"预训练（sucking up the internet）"转向"后训练（post-training）"时，为什么**专家数据**成为唯一关键资源？
- 如何在**成熟公司内部孵化第二业务**，从零到一在8个月内达到1亿美元ARR，超越10年主业？
- 当**通用ist劳动力**被AI淘汰，**专家级人类**如何成为模型进步的核心驱动力？
- **零获客成本**的1800万用户网络如何成为"人类数据唯一护城河"？

---

## 2. 核心洞察 (Core Conclusions)

### **"后训练时代"的数据革命**
- **18-24个月前**：AI实验室专注于"预训练"——sucking up the entire internet（整个互联网的书面人类知识）
- **现在**：预训练收益asymptoting（趋于平缓），**所有收益来自后训练**——augmenting and improving data across every discipline
- **后训练类型**：
  - RLHF（reinforcement learning with human feedback）：preference ranking data（哪个回答更好？A还是B？）
  - SFT（supervised fine-tuning）：prompt-response pairs
  - Trajectories：整个问题解决环境的screen + mouse + voiceover记录
  - Rubrics：模型作为judge评估无标准答案的领域（如教育设计、MRI结果）
  - Reasoning models：step-by-step instructions

### **从"通用ist"到"专家ist"的范式转移**
- **旧模式**：低成本的国际化通用劳动力（draw bounding boxes around stop signs in the Philippines）
- **新模式**：**models have gotten so good that generalists are no longer needed. What they really need is experts**
- **博士的定义**：defending your thesis = proving you've extended the world's knowledge in a particular domain
- **Handshake优势**：1800万专业用户，50万博士，300万硕士学生——**人类数据唯一护城河是访问受众**

### **"Breaking the Models"的专家工作**
- **普通人无法打破模型**，但博士可以在多个子领域证明模型在reasoning steps或ground truth answers上的失败
- **GPQA论文**工作流：break the model → provide ground truth → provide step-by-step reasoning steps → identify where it's failing（知道答案但步骤错误，如10步数学问题的第6-10步错误）
- **示例**：教育博士Rachel（迈阿密大学博士，20年八年级教师经验）与state-of-the-art models互动，识别教育设计中的错误，帮助模型理解教育设计前沿

### **内部孵化的"独立公司"模式**
- **结构独立**：分离的工程团队、设计团队、财务团队、招聘团队、separate all hands
- **人员单一职责**：everyone only had one job and one job only → making Handshake AI successful
- **补偿差异化**：基于新业务里程碑的ownership-based compensation
- **期望透明化**："This is a 24/7 job. This is an early-stage company" + 大量weekend work
- **物理隔离**：办公室不同区域 + separate onboarding
- **数据驱动运营**：从Day 1就有weekly/monthly/quarterly operating cadence（vs. Handshake早期resisted）

### **市场验证的质量-速度-体积三角**
- **Model builders在乎三件事**：
  1. **Quality first and foremost**：错误数据极其难以overcome
  2. **Volume**：如何在化学、数学、物理的最先进领域生成thousands of pieces of data？
  3. **Speed**：研究hypothesis testing需要days级turnaround → 一旦showing gains立即grow pipeline，ditch 2-3个其他projects
- **Handshakes优势**：Reach out to Stanford, Berkeley, MIT top GPA students → 高质量 + 高体积 + 快速周转

---

## 3. 心法与原则

- **"Leave nothing to chance"**：在unlimited demand的once-in-a-lifetime moment，如何确保3-6个月后无后悔？Get on the plane to talk to customer, make the late night push, check the data six times over again
- **"The only moat in human data is access to an audience"**：其他公司200个recruiters在LinkedIn发消息 + tens of millions/month performance ads → Handshake有10年品牌信任 + 主动用户profiles
- **"Treat people like experts, not low-cost labor"**：PhDs expect different treatment than international generalists → 社区驱动 + 高质量training + instructional design
- **"Separate everything for zero-to-one"**：在成熟公司内孵化新业务需要完全独立的团队、文化、期望、运营节奏
- **"Model of today is the worst model you'll ever use"**（Kevin Wheel, OpenAI CBO quote）：只会越来越好

---

## 4. 实战手册

### **数据标注工作流程（专家视角）**
1. **Onboarding**：
   - Build profile → see community + groups + feed of how people are learning
   - Individual cohort with peers of similar background
   - Instructional design piece（无法直接开始工作）
   - Trial and error learning on how to interact with latest models

2. **Two project types**：
   - **Handshake项目**（pre-built data sold to all labs）：像"电影制作"——pay for unit of data → run own post-training → ensure quality → sell package to many labs
   - **客户项目**：从internal projects证明后才能进入customer-only projects

3. **实际工作内容**：
   - Break models in advanced domains（subdomains of physics, chemistry, biology）
   - Provide ground truth + step-by-step reasoning
   - Narrate over tool use trajectories（screen recording + mouse tracking + voiceover）
   - Create rubrics for non-verifiable domains

### **内部孵化成功要素**
1. **创始人直接领导**：80%+时间专注新业务（Garrett case）
2. **完全独立架构**：
   - Separate engineering, design, accounts/ops, finance
   - Separate recruiting team + onboarding
   - Separate all hands meetings
3. **透明化期望**：
   - "This will be chaotic" narrative
   - 24/7 expectation upfront
   - Weekend work normalized
4. **Ownership文化**：
   - Compensation based on new business milestones
   - "Leave nothing to chance" motto
   - 直接在白板上画每年天数 → "There will never be a time like this"
5. **从核心团队借调**：
   - Principal engineers, staff engineers parachute in
   - 一些核心业务top人员被邀请："Sorry, I know you love your old team. Will you join us?"
   - 有些人say no to weekend work expectations
6. **早期聚焦单一客户**：
   - Deliver high-quality data to ONE customer before expanding
   - Say no to a lot of things
   - 与#1 lab工作5个月才expand to 7 Frontier Labs

### **客户获取成本-生命周期价值优势**
- **Competitors**：
  - 200 recruiters on LinkedIn sending individual messages
  - Tens of millions/month on performance ads（Google, Instagram, YouTube）
  - Treat people like "drawing boundary boxes" labor
  - High drop-off in process
- **Handshake**：
  - **Zero CAC**：1600所大学是partners，92% of top 500 schools
  - High conversion rates（品牌信任 + active profile）
  - High LTV（大学tolerance要求treat fellows well + high retention）
  - Community-rooted experience vs. transactional

### **质量保证体系**
- 每个unit of data有：
  - Custom environment for creation
  - Unit-level gain approximation（能否improve particular capability area）
  - Research team assessment
  - Post-training team validation
  - GPU rentals for own testing
- **直接与researchers合作**：share insights on data + how to best train with it

---

## 5. 反常识视角

- **"人类不会失业，AI会让年轻人更具优势"**：
  - **Google Search on resume时代**：你会用Google是技能
  - **AI native时代**：young people with Iron Man suit on are at huge advantage
  - **雇主反馈**：不是"年轻人没工作"，而是"一个AI native年轻人可以独自完成以前需要整个团队的工作"（社交媒体营销：视频制作 + 创意资产 + 多平台发布 + 分析）
  - **Intern案例**：first PR up afternoon he started（历史这需要dev environment setup + figure out where to add value）
- **"专家收入vs.助理收入"**：TAship $25/hour vs. breaking latest models $150-200/hour in field of expertise
- **"数据标注不是体力劳动，是学习技能"**：
  - Fellows bring insights into classroom to improve teaching
  - Learn to leverage tools to advance their research
  - **"Get paid to learn a skill"**
- **"合成数据不会dominate"**：consistently hear from companies synthetic data is not going to dominate in verifiable domains
- **"Scale AI的被收购证明了我们的战略"**：
  - 如果你view research team as cornerstone → wouldn't want latest research invested in by peer
  - Scale被Alexandr Wang running superintelligence at Meta后退出labeling space
- **"Unlimited demand if you can produce high quality volumes"**：
  - If you can produce high quality volumes of data, you most likely will be able to sell whatever you produce
  - Bottleneck is execution, not demand

---

## 6. 花絮与细节

### **创业早期Hustle**
- **Princeton pool shower incident**：
  - 睡在Ford Focus后座，McDonald's parking lots（well-lit + good wifi）
  - 大学pool总有open shower → freshen up before meetings
  - Princeton campus security几乎逮捕他 → 但called career service director："Who's Garrett Lord? Is he really here to pitch software?"
  - 开会更exciting：showed level of commitment
- **早期Handshake增长**：
  - 签约1600所大学 → fastest growing higher education company in history
  - Build employer business（100% Fortune 500 use, 70% pay）
  - Build student social network

### **个人生活与工作**
- **妻子刚生宝宝**（podcast前几天Sunday）
- **Voice mode救星**：每两小时醒来有更多问题 → voice mode incredible
- **SNOO baby bassinet**：大部分时间不开，但几次cries时turned on very helpful
- **Game of Thrones首次观看**：妻子一起start，爱所以far，很多catching up to do

### **推荐资源**
- **Books**：
  - Peter Thiel《Zero to One》
  - 《Shoe Dog》（"epitome of starting a company"）
  - Ben Horowitz《The Hard Thing About Hard Things》
- **Motto**："Leave nothing to chance, leave it all out on the field" → dad worked really hard to provide

### **职业路径**
- Community college → paid own way through school → no-name school in Upper Peninsula Michigan → Palantir intern（totally changed his life）→ Started Handshake
- **使命**：make it easier for anyone regardless of who you knew, what your parents did, what school you went to, to find a great opportunity
- **未来愿景**：
  - AI interviewer collecting skills + work simulation experiences
  - No more reviewing 200 resumes（5年后）
  - No more manual cover letters
  - Human data business as foundation for improving matching

### **招聘与联系**
- **Huge hiring need**：#1 problem right now to meet demand
- **Offices**：New York, San Francisco, London, Berlin
- **Contact**：
  - Message on Handshake（easiest way）
  - garrettlord@Handshake
  - Twitter/X（huge X guy）
  - garrett@joinhandshake.com
- **Offer to listeners**：Open to advice on starting companies within AI

### **工作强度**
- Regular 2-3 AM nights
- "Quite regular" late night pushes
- Separate all hands + operating cadence
- Flat organization：直接点名people putting up points
- Celebratory culture around impact

---

## 关键术语

- **Post-training**（后训练）：模型训练的augmenting and improving data阶段，当前主要收益来源
- **Pre-training**（预训练）：sucking up the entire internet的早期阶段
- **Trajectories**（轨迹）：screen + mouse + voiceover的完整问题解决环境记录
- **Rubrics**（评分标准）：模型作为judge评估无标准答案领域
- **SFT**（Supervised Fine-Tuning）：监督微调
- **RLHF**（Reinforcement Learning with Human Feedback）：人类反馈强化学习
- **GPQA**：Google PhD Question Answering benchmark论文
- **Zero CAC**（Zero Customer Acquisition Cost）：零获客成本
- **Iron Man suit**：AI tools的比喻（让普通人superpowered）
