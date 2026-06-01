const STORAGE_KEY = "english-family-lab:v1";
const API_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const labels = {
  vi: {
    navToday: "Hôm nay",
    navVocab: "Từ vựng",
    navGrammar: "Grammar",
    navExercises: "Bài tập",
    navProgress: "Tiến độ",
    navSettings: "Cài đặt",
    todayTitle: "Hôm nay",
    todaySub: "Từ mới, ôn lại, streak và mục tiêu trong ngày.",
    start: "Bắt đầu",
    nextWord: "Từ tiếp",
    shuffle: "Trộn từ",
    lookup: "Tra từ",
    lookupPlaceholder: "Nhập từ tiếng Anh",
    source: "Nguồn",
    streak: "Streak",
    learned: "Đã học",
    due: "Cần ôn",
    saved: "Đã lưu",
    dailyGoal: "Mục tiêu ngày",
    reviewsToday: "Lượt hôm nay",
    wordFamily: "Word family",
    grammarMap: "Grammar map",
    again: "Quên",
    hard: "Khó",
    good: "Ổn",
    easy: "Dễ",
    vocabTitle: "Từ vựng",
    grammarTitle: "Grammar",
    progressTitle: "Tiến độ",
    settingsTitle: "Cài đặt",
    goal: "Mục tiêu",
    level: "Level",
    dailyTarget: "Từ mỗi ngày",
    save: "Lưu",
    reset: "Reset dữ liệu",
    placement: "Test đầu vào",
    answer: "Trả lời",
    correct: "Đúng",
    wrong: "Chưa đúng",
    chooseGoal: "Chọn mục tiêu",
    chooseLevel: "Chọn level",
    pronunciation: "Phát âm",
    reviewed: "Đã ghi nhận",
    noSaved: "Chưa có từ đã lưu.",
    noDue: "Chưa có từ cần ôn.",
    familyGoal: "Cá nhân/gia đình",
    apiError: "Chưa tra được từ này. App vẫn dùng dữ liệu học có sẵn.",
    apiLoading: "Đang tra từ điển...",
    installNote: "PWA static, dùng được trên iPhone/iPad qua Add to Home Screen.",
    attribution: "Dictionary data: dictionaryapi.dev",
    grammarPractice: "Luyện nhanh",
    nextQuestion: "Câu tiếp",
    tryAgain: "Làm lại",
    explanation: "Giải thích",
    exercisesTitle: "Bài tập",
    exercisesSub: "Trắc nghiệm từ vựng và grammar đã học qua.",
    profile: "Người học",
    addProfile: "Thêm người học",
    profileName: "Tên người học",
    activeProfile: "Đang học",
    dailyLesson: "Bài hôm nay",
    lessonReady: "Bài học hôm nay đã sẵn sàng",
    reviewFirst: "Hãy học vài từ trước, app sẽ tạo bài tập cá nhân hơn.",
    writingLab: "Sửa câu",
    writingPlaceholder: "Viết một câu tiếng Anh với từ đang học",
    writingResult: "LanguageTool sẽ kiểm tra grammar, spelling và gợi ý sửa câu.",
    checkWriting: "Kiểm tra câu",
    noWritingIssues: "Chưa thấy lỗi rõ ràng.",
    cloudSync: "Đồng bộ cloud",
    supabaseUrl: "Supabase URL",
    supabaseKey: "Supabase anon key",
    email: "Email",
    sendLogin: "Gửi link đăng nhập",
    syncUp: "Lưu lên cloud",
    syncDown: "Tải từ cloud",
    cloudReady: "Đã kết nối cloud",
    cloudMissing: "Chưa cấu hình Supabase",
    loginSent: "Đã gửi link đăng nhập",
    syncDone: "Đã đồng bộ",
    syncFailed: "Đồng bộ chưa thành công",
    selected: "Đang chọn",
    nextReview: "Ôn lại",
    todayQueue: "Queue hôm nay",
    sevenDays: "7 ngày",
    profileSaved: "Đã lưu cài đặt",
    dataReset: "Đã reset dữ liệu",
    savedWord: "Đã lưu từ",
    removedWord: "Đã bỏ lưu",
  },
  en: {
    navToday: "Today",
    navVocab: "Vocab",
    navGrammar: "Grammar",
    navExercises: "Practice",
    navProgress: "Progress",
    navSettings: "Settings",
    todayTitle: "Today",
    todaySub: "New words, review queue, streak, and daily target.",
    start: "Start",
    nextWord: "Next",
    shuffle: "Shuffle",
    lookup: "Lookup",
    lookupPlaceholder: "Enter an English word",
    source: "Source",
    streak: "Streak",
    learned: "Learned",
    due: "Due",
    saved: "Saved",
    dailyGoal: "Daily goal",
    reviewsToday: "Today",
    wordFamily: "Word family",
    grammarMap: "Grammar map",
    again: "Again",
    hard: "Hard",
    good: "Good",
    easy: "Easy",
    vocabTitle: "Vocabulary",
    grammarTitle: "Grammar",
    progressTitle: "Progress",
    settingsTitle: "Settings",
    goal: "Goal",
    level: "Level",
    dailyTarget: "Words/day",
    save: "Save",
    reset: "Reset data",
    placement: "Placement test",
    answer: "Answer",
    correct: "Correct",
    wrong: "Not yet",
    chooseGoal: "Choose goal",
    chooseLevel: "Choose level",
    pronunciation: "Pronounce",
    reviewed: "Logged",
    noSaved: "No saved words yet.",
    noDue: "No review due.",
    familyGoal: "Personal/family",
    apiError: "Could not look up this word. The built-in learning data is still available.",
    apiLoading: "Looking up dictionary...",
    installNote: "Static PWA, works on iPhone/iPad via Add to Home Screen.",
    attribution: "Dictionary data: dictionaryapi.dev",
    grammarPractice: "Quick practice",
    nextQuestion: "Next question",
    tryAgain: "Try again",
    explanation: "Explanation",
    exercisesTitle: "Exercises",
    exercisesSub: "Quizzes from vocabulary and grammar you have studied.",
    profile: "Learner",
    addProfile: "Add learner",
    profileName: "Learner name",
    activeProfile: "Active",
    dailyLesson: "Today's lesson",
    lessonReady: "Today's lesson is ready",
    reviewFirst: "Study a few words first and the app will personalize these exercises.",
    writingLab: "Writing check",
    writingPlaceholder: "Write a sentence with the current word",
    writingResult: "LanguageTool will check grammar, spelling, and wording suggestions.",
    checkWriting: "Check sentence",
    noWritingIssues: "No clear issue found.",
    cloudSync: "Cloud sync",
    supabaseUrl: "Supabase URL",
    supabaseKey: "Supabase anon key",
    email: "Email",
    sendLogin: "Send login link",
    syncUp: "Save to cloud",
    syncDown: "Load from cloud",
    cloudReady: "Cloud connected",
    cloudMissing: "Supabase is not configured",
    loginSent: "Login link sent",
    syncDone: "Synced",
    syncFailed: "Sync failed",
    selected: "Selected",
    nextReview: "Review",
    todayQueue: "Today queue",
    sevenDays: "7 days",
    profileSaved: "Settings saved",
    dataReset: "Data reset",
    savedWord: "Word saved",
    removedWord: "Word unsaved",
  },
};

const goals = ["Study", "Business", "Research", "Daily", "Travel"];
const levels = ["Beginner", "Intermediate", "Advanced"];

const vocabulary = [
  {
    word: "analyze",
    phonetic: "/ˈænəlaɪz/",
    pos: "verb",
    level: "Intermediate",
    goals: ["Study", "Research", "Business"],
    vi: "phân tích kỹ để hiểu nguyên nhân, cấu trúc hoặc ý nghĩa",
    en: "to examine something carefully to understand it",
    noteVi: "Dùng nhiều trong học thuật, công việc dữ liệu và nghiên cứu.",
    noteEn: "Common in academic, data, and research contexts.",
    example: "We need to analyze the survey results before making a decision.",
    exampleVi: "Chúng ta cần phân tích kết quả khảo sát trước khi ra quyết định.",
    family: ["analysis", "analyst", "analytical", "analytics"],
    grammar: ["need to + verb", "before + V-ing"],
    collocations: ["analyze data", "analyze results", "analyze a problem"],
  },
  {
    word: "evidence",
    phonetic: "/ˈevɪdəns/",
    pos: "noun",
    level: "Intermediate",
    goals: ["Research", "Study", "Business"],
    vi: "bằng chứng dùng để hỗ trợ một ý kiến hoặc kết luận",
    en: "facts or information that support a conclusion",
    noteVi: "Thường đi với strong, clear, limited, scientific.",
    noteEn: "Often used with strong, clear, limited, and scientific.",
    example: "The report provides clear evidence that the strategy is working.",
    exampleVi: "Báo cáo đưa ra bằng chứng rõ ràng rằng chiến lược đang hiệu quả.",
    family: ["evident", "evidently"],
    grammar: ["that-clause", "uncountable noun"],
    collocations: ["clear evidence", "scientific evidence", "provide evidence"],
  },
  {
    word: "approach",
    phonetic: "/əˈproʊtʃ/",
    pos: "noun/verb",
    level: "Intermediate",
    goals: ["Business", "Study", "Research"],
    vi: "cách tiếp cận một vấn đề hoặc bắt đầu xử lý việc gì",
    en: "a way of dealing with a problem or task",
    noteVi: "Có thể là danh từ hoặc động từ.",
    noteEn: "Works as both a noun and a verb.",
    example: "This approach helps beginners remember new words in context.",
    exampleVi: "Cách tiếp cận này giúp người mới nhớ từ mới trong ngữ cảnh.",
    family: ["approachable", "approaching"],
    grammar: ["this/that + noun", "help + object + verb"],
    collocations: ["a practical approach", "approach a problem", "new approach"],
  },
  {
    word: "conduct",
    phonetic: "/kənˈdʌkt/",
    pos: "verb",
    level: "Advanced",
    goals: ["Research", "Study", "Business"],
    vi: "thực hiện hoặc tiến hành một hoạt động có kế hoạch",
    en: "to organize and carry out an activity",
    noteVi: "Trang trọng hơn do/make; dùng trong research, survey, meeting.",
    noteEn: "More formal than do or make; common with research, surveys, and meetings.",
    example: "The team conducted interviews with ten participants.",
    exampleVi: "Nhóm đã tiến hành phỏng vấn mười người tham gia.",
    family: ["conduction", "conductive", "conductor"],
    grammar: ["past simple", "with + number + noun"],
    collocations: ["conduct research", "conduct a survey", "conduct an interview"],
  },
  {
    word: "clarify",
    phonetic: "/ˈklærəfaɪ/",
    pos: "verb",
    level: "Intermediate",
    goals: ["Business", "Study", "Daily"],
    vi: "làm rõ điều gì đó để người khác hiểu chính xác",
    en: "to make something clearer or easier to understand",
    noteVi: "Rất hữu ích khi hỏi lại trong họp hoặc học.",
    noteEn: "Useful when asking for precision in meetings or study.",
    example: "Could you clarify what you mean by deadline?",
    exampleVi: "Bạn có thể làm rõ ý bạn về hạn chót không?",
    family: ["clarity", "clarification", "clear"],
    grammar: ["Could you + verb", "what-clause"],
    collocations: ["clarify a point", "ask for clarification", "clarify meaning"],
  },
  {
    word: "assume",
    phonetic: "/əˈsuːm/",
    pos: "verb",
    level: "Intermediate",
    goals: ["Study", "Business", "Research"],
    vi: "giả định điều gì là đúng dù chưa có đủ bằng chứng",
    en: "to think something is true without full proof",
    noteVi: "Cẩn thận: assume không giống consume/resume.",
    noteEn: "Be careful: assume is not consume or resume.",
    example: "We should not assume that every learner has the same goal.",
    exampleVi: "Chúng ta không nên giả định rằng mọi người học đều có cùng mục tiêu.",
    family: ["assumption", "assuming", "assumed"],
    grammar: ["should not + verb", "that-clause"],
    collocations: ["assume responsibility", "make an assumption", "assume that"],
  },
  {
    word: "reliable",
    phonetic: "/rɪˈlaɪəbəl/",
    pos: "adjective",
    level: "Intermediate",
    goals: ["Business", "Research", "Daily"],
    vi: "đáng tin cậy, có thể dựa vào",
    en: "able to be trusted or depended on",
    noteVi: "Dùng cho người, dữ liệu, nguồn tin, hệ thống.",
    noteEn: "Used for people, data, sources, and systems.",
    example: "A reliable source can save you a lot of time.",
    exampleVi: "Một nguồn đáng tin cậy có thể tiết kiệm cho bạn rất nhiều thời gian.",
    family: ["reliability", "reliably", "rely"],
    grammar: ["adjective + noun", "can + verb"],
    collocations: ["reliable data", "reliable source", "highly reliable"],
  },
  {
    word: "prioritize",
    phonetic: "/praɪˈɔːrətaɪz/",
    pos: "verb",
    level: "Intermediate",
    goals: ["Business", "Study", "Daily"],
    vi: "ưu tiên việc quan trọng hơn trước",
    en: "to decide what is most important and do it first",
    noteVi: "Hay dùng với tasks, goals, work, learning.",
    noteEn: "Often used with tasks, goals, work, and learning.",
    example: "I prioritize useful vocabulary before memorizing rare words.",
    exampleVi: "Tôi ưu tiên từ vựng hữu ích trước khi học thuộc các từ hiếm.",
    family: ["priority", "prioritization"],
    grammar: ["before + V-ing", "subject + verb + object"],
    collocations: ["prioritize tasks", "top priority", "prioritize learning"],
  },
  {
    word: "brief",
    phonetic: "/briːf/",
    pos: "adjective/noun/verb",
    level: "Beginner",
    goals: ["Business", "Daily", "Study"],
    vi: "ngắn gọn; bản tóm tắt; tóm tắt cho ai đó",
    en: "short; a short summary; to give key information",
    noteVi: "Trong công việc hay gặp brief update, project brief.",
    noteEn: "Common at work in brief update and project brief.",
    example: "Please give me a brief update after the call.",
    exampleVi: "Vui lòng cập nhật ngắn gọn cho tôi sau cuộc gọi.",
    family: ["briefly", "briefing"],
    grammar: ["Please + verb", "after + noun"],
    collocations: ["brief update", "brief meeting", "project brief"],
  },
  {
    word: "schedule",
    phonetic: "/ˈskedʒuːl/",
    pos: "noun/verb",
    level: "Beginner",
    goals: ["Business", "Study", "Daily", "Travel"],
    vi: "lịch trình; lên lịch",
    en: "a plan for when things happen; to arrange a time",
    noteVi: "Mỹ thường đọc /ˈskedʒuːl/, Anh thường /ˈʃedjuːl/.",
    noteEn: "US and UK pronunciation may differ.",
    example: "Can we schedule a short review session tonight?",
    exampleVi: "Tối nay mình có thể lên lịch một buổi ôn ngắn không?",
    family: ["scheduled", "scheduling"],
    grammar: ["Can we + verb", "adjective + noun"],
    collocations: ["schedule a meeting", "busy schedule", "review session"],
  },
  {
    word: "efficient",
    phonetic: "/ɪˈfɪʃənt/",
    pos: "adjective",
    level: "Intermediate",
    goals: ["Business", "Study", "Research"],
    vi: "hiệu quả về thời gian, công sức hoặc tài nguyên",
    en: "working well without wasting time or resources",
    noteVi: "Khác effective: effective là đạt kết quả, efficient là ít lãng phí.",
    noteEn: "Different from effective: effective gets results; efficient avoids waste.",
    example: "Spaced repetition is an efficient way to learn vocabulary.",
    exampleVi: "Lặp lại ngắt quãng là một cách hiệu quả để học từ vựng.",
    family: ["efficiency", "efficiently"],
    grammar: ["an + adjective + noun", "to + verb"],
    collocations: ["efficient process", "work efficiently", "time-efficient"],
  },
  {
    word: "context",
    phonetic: "/ˈkɑːntekst/",
    pos: "noun",
    level: "Beginner",
    goals: ["Study", "Research", "Daily"],
    vi: "ngữ cảnh giúp hiểu đúng ý nghĩa",
    en: "the situation that helps explain meaning",
    noteVi: "Học từ trong context thường nhớ lâu hơn học từ riêng lẻ.",
    noteEn: "Learning in context is usually stronger than isolated memorization.",
    example: "A new word is easier to remember when you see it in context.",
    exampleVi: "Một từ mới dễ nhớ hơn khi bạn thấy nó trong ngữ cảnh.",
    family: ["contextual", "contextualize"],
    grammar: ["comparative adjective", "when-clause"],
    collocations: ["in context", "historical context", "context clue"],
  },
  {
    word: "negotiate",
    phonetic: "/nɪˈɡoʊʃieɪt/",
    pos: "verb",
    level: "Advanced",
    goals: ["Business", "Travel", "Daily"],
    vi: "đàm phán để đạt thỏa thuận",
    en: "to discuss something in order to reach an agreement",
    noteVi: "Có thể dùng trong công việc, mua bán, điều khoản.",
    noteEn: "Useful for work, buying, and terms.",
    example: "They negotiated a better price for the long-term contract.",
    exampleVi: "Họ đã đàm phán mức giá tốt hơn cho hợp đồng dài hạn.",
    family: ["negotiation", "negotiator", "negotiable"],
    grammar: ["past simple", "comparative adjective"],
    collocations: ["negotiate a deal", "price negotiation", "non-negotiable"],
  },
  {
    word: "evaluate",
    phonetic: "/ɪˈvæljueɪt/",
    pos: "verb",
    level: "Intermediate",
    goals: ["Research", "Study", "Business"],
    vi: "đánh giá dựa trên tiêu chí hoặc bằng chứng",
    en: "to judge the value or quality of something",
    noteVi: "Trang trọng hơn check; thường đi với performance, result, option.",
    noteEn: "More formal than check; common with performance, results, and options.",
    example: "We evaluate each option before choosing a tool.",
    exampleVi: "Chúng ta đánh giá từng lựa chọn trước khi chọn công cụ.",
    family: ["evaluation", "evaluator", "evaluative"],
    grammar: ["each + singular noun", "before + V-ing"],
    collocations: ["evaluate performance", "evaluate options", "carefully evaluate"],
  },
  {
    word: "summarize",
    phonetic: "/ˈsʌməraɪz/",
    pos: "verb",
    level: "Beginner",
    goals: ["Study", "Research", "Business"],
    vi: "tóm tắt ý chính",
    en: "to give the main points in a short form",
    noteVi: "Kỹ năng quan trọng khi đọc tài liệu tiếng Anh.",
    noteEn: "A key skill for reading English documents.",
    example: "Can you summarize the article in three sentences?",
    exampleVi: "Bạn có thể tóm tắt bài viết trong ba câu không?",
    family: ["summary", "summarization"],
    grammar: ["Can you + verb", "in + number + plural noun"],
    collocations: ["summarize an article", "brief summary", "executive summary"],
  },
  {
    word: "constraint",
    phonetic: "/kənˈstreɪnt/",
    pos: "noun",
    level: "Advanced",
    goals: ["Business", "Research", "Study"],
    vi: "ràng buộc hoặc giới hạn ảnh hưởng đến lựa chọn",
    en: "a limit or restriction that affects choices",
    noteVi: "Dùng trong dự án: time constraint, budget constraint.",
    noteEn: "Useful in projects: time constraint, budget constraint.",
    example: "The main constraint is the amount of time we have.",
    exampleVi: "Ràng buộc chính là lượng thời gian chúng ta có.",
    family: ["constrain", "constrained"],
    grammar: ["the main + noun", "relative clause"],
    collocations: ["time constraint", "budget constraint", "technical constraint"],
  },
  {
    word: "expand",
    phonetic: "/ɪkˈspænd/",
    pos: "verb",
    level: "Beginner",
    goals: ["Business", "Study", "Daily"],
    vi: "mở rộng, làm lớn hơn hoặc phát triển thêm",
    en: "to become larger or to make something larger",
    noteVi: "Có thể dùng với vocabulary, business, knowledge.",
    noteEn: "Used with vocabulary, business, and knowledge.",
    example: "Reading short articles helps me expand my vocabulary.",
    exampleVi: "Đọc các bài ngắn giúp tôi mở rộng vốn từ vựng.",
    family: ["expansion", "expanded", "expansive"],
    grammar: ["help + object + verb", "possessive adjective"],
    collocations: ["expand vocabulary", "expand business", "expand knowledge"],
  },
  {
    word: "accurate",
    phonetic: "/ˈækjərət/",
    pos: "adjective",
    level: "Intermediate",
    goals: ["Research", "Study", "Business"],
    vi: "chính xác, ít sai lệch",
    en: "correct and without mistakes",
    noteVi: "Dùng với data, answer, translation, measurement.",
    noteEn: "Used with data, answers, translations, and measurements.",
    example: "Accurate pronunciation makes your English easier to understand.",
    exampleVi: "Phát âm chính xác giúp tiếng Anh của bạn dễ hiểu hơn.",
    family: ["accuracy", "accurately", "inaccurate"],
    grammar: ["make + object + adjective", "comparative adjective"],
    collocations: ["accurate data", "accurate answer", "highly accurate"],
  },
  {
    word: "confident",
    phonetic: "/ˈkɑːnfədənt/",
    pos: "adjective",
    level: "Beginner",
    goals: ["Daily", "Business", "Study", "Travel"],
    vi: "tự tin, tin rằng mình có thể làm tốt",
    en: "feeling sure about your ability",
    noteVi: "Dùng với speaking, presentation, decision.",
    noteEn: "Used with speaking, presentations, and decisions.",
    example: "I feel more confident when I practice with simple sentences.",
    exampleVi: "Tôi cảm thấy tự tin hơn khi luyện với những câu đơn giản.",
    family: ["confidence", "confidently"],
    grammar: ["feel + adjective", "when-clause"],
    collocations: ["feel confident", "build confidence", "speak confidently"],
  },
  {
    word: "handle",
    phonetic: "/ˈhændəl/",
    pos: "verb/noun",
    level: "Beginner",
    goals: ["Business", "Daily", "Travel"],
    vi: "xử lý một tình huống hoặc nhiệm vụ",
    en: "to deal with a situation or task",
    noteVi: "Trong giao tiếp: handle a problem, handle pressure.",
    noteEn: "Useful in conversation: handle a problem, handle pressure.",
    example: "She can handle difficult conversations calmly.",
    exampleVi: "Cô ấy có thể xử lý các cuộc trò chuyện khó một cách bình tĩnh.",
    family: ["handling", "handled"],
    grammar: ["can + verb", "adverb of manner"],
    collocations: ["handle pressure", "handle a task", "handle a request"],
  },
  {
    word: "reservation",
    phonetic: "/ˌrezərˈveɪʃən/",
    pos: "noun",
    level: "Beginner",
    goals: ["Travel", "Daily"],
    vi: "đặt chỗ trước tại khách sạn, nhà hàng hoặc chuyến đi",
    en: "an arrangement to keep a seat, room, or table for you",
    noteVi: "Travel word rất thực dụng.",
    noteEn: "A practical travel word.",
    example: "I have a reservation under the name Nguyen.",
    exampleVi: "Tôi có đặt chỗ dưới tên Nguyen.",
    family: ["reserve", "reserved"],
    grammar: ["have + noun", "under the name"],
    collocations: ["make a reservation", "hotel reservation", "dinner reservation"],
  },
  {
    word: "departure",
    phonetic: "/dɪˈpɑːrtʃər/",
    pos: "noun",
    level: "Beginner",
    goals: ["Travel", "Study"],
    vi: "sự khởi hành, giờ rời đi",
    en: "the act or time of leaving",
    noteVi: "Ở sân bay sẽ thấy departure gate, departure time.",
    noteEn: "At airports you will see departure gate and departure time.",
    example: "The departure time has changed to 8:30.",
    exampleVi: "Giờ khởi hành đã đổi sang 8:30.",
    family: ["depart", "departing"],
    grammar: ["present perfect", "change to + time"],
    collocations: ["departure time", "departure gate", "late departure"],
  },
  {
    word: "confirm",
    phonetic: "/kənˈfɜːrm/",
    pos: "verb",
    level: "Beginner",
    goals: ["Business", "Travel", "Daily"],
    vi: "xác nhận điều gì là đúng hoặc chắc chắn",
    en: "to say that something is true or definite",
    noteVi: "Email công việc hay dùng please confirm.",
    noteEn: "Common in work email: please confirm.",
    example: "Please confirm the meeting time by this afternoon.",
    exampleVi: "Vui lòng xác nhận giờ họp trước chiều nay.",
    family: ["confirmation", "confirmed"],
    grammar: ["Please + verb", "by + time"],
    collocations: ["confirm a booking", "confirm details", "confirmation email"],
  },
  {
    word: "improve",
    phonetic: "/ɪmˈpruːv/",
    pos: "verb",
    level: "Beginner",
    goals: ["Study", "Daily", "Business"],
    vi: "cải thiện, làm tốt hơn",
    en: "to make or become better",
    noteVi: "Dùng với skill, pronunciation, process, result.",
    noteEn: "Used with skills, pronunciation, processes, and results.",
    example: "Daily review can improve your long-term memory.",
    exampleVi: "Ôn mỗi ngày có thể cải thiện trí nhớ dài hạn của bạn.",
    family: ["improvement", "improved"],
    grammar: ["can + verb", "possessive adjective"],
    collocations: ["improve skills", "improve pronunciation", "continuous improvement"],
  },
];

const grammarTopics = [
  {
    id: "modal-requests",
    titleVi: "Yêu cầu lịch sự",
    titleEn: "Polite requests",
    level: "Beginner",
    examples: [
      ["Could you clarify this point?", "Bạn có thể làm rõ điểm này không?"],
      ["Can we schedule a review session?", "Mình có thể lên lịch một buổi ôn không?"],
    ],
    focus: ["Could you + verb", "Can we + verb", "Please + verb"],
    quiz: {
      question: "___ you confirm the meeting time?",
      choices: ["Could", "Very", "During"],
      answer: "Could",
    },
  },
  {
    id: "before-gerund",
    titleVi: "Before + V-ing",
    titleEn: "Before + gerund",
    level: "Intermediate",
    examples: [
      ["Evaluate each option before choosing a tool.", "Đánh giá từng lựa chọn trước khi chọn công cụ."],
      ["Analyze the results before making a decision.", "Phân tích kết quả trước khi ra quyết định."],
    ],
    focus: ["before + V-ing", "after + V-ing", "without + V-ing"],
    quiz: {
      question: "We should review the data before ___ a decision.",
      choices: ["make", "making", "made"],
      answer: "making",
    },
  },
  {
    id: "that-clauses",
    titleVi: "Mệnh đề that",
    titleEn: "That-clauses",
    level: "Intermediate",
    examples: [
      ["The report shows that the strategy is working.", "Báo cáo cho thấy chiến lược đang hiệu quả."],
      ["Do not assume that every learner has the same goal.", "Đừng giả định mọi người học có cùng mục tiêu."],
    ],
    focus: ["verb + that + clause", "evidence that", "assume that"],
    quiz: {
      question: "The evidence shows ___ the method works.",
      choices: ["that", "than", "what"],
      answer: "that",
    },
  },
  {
    id: "comparatives",
    titleVi: "So sánh hơn",
    titleEn: "Comparatives",
    level: "Beginner",
    examples: [
      ["This method is easier to follow.", "Cách này dễ theo hơn."],
      ["Accurate pronunciation makes English easier to understand.", "Phát âm chính xác giúp tiếng Anh dễ hiểu hơn."],
    ],
    focus: ["easier", "better", "more confident"],
    quiz: {
      question: "Practice makes you ___ confident.",
      choices: ["more", "most", "many"],
      answer: "more",
    },
  },
];

const placementQuestions = [
  {
    question: "I need ___ the report before Monday.",
    choices: ["finish", "to finish", "finishing"],
    answer: "to finish",
  },
  {
    question: "This is the most ___ source I found.",
    choices: ["rely", "reliable", "reliably"],
    answer: "reliable",
  },
  {
    question: "We analyzed the data before ___ the plan.",
    choices: ["change", "changed", "changing"],
    answer: "changing",
  },
  {
    question: "The article provides evidence ___ vocabulary grows through review.",
    choices: ["that", "than", "when"],
    answer: "that",
  },
  {
    question: "Could you ___ what you mean?",
    choices: ["clarify", "clarity", "clearance"],
    answer: "clarify",
  },
];

const defaultState = {
  locale: "vi",
  activeTab: "today",
  currentIndex: 0,
  profiles: [{ id: "me", name: "Tôi" }],
  activeProfileId: "me",
  profileStore: {},
  goal: "Study",
  level: "Intermediate",
  dailyTarget: 6,
  learned: {},
  sessions: {},
  saved: [],
  dictionaryCache: {},
  dailyLessons: {},
  selectedGrammar: "modal-requests",
  grammarAnswers: {},
  grammarPractice: {},
  placementAnswers: {},
  placementResult: null,
  exerciseIndex: 0,
  exerciseAnswer: null,
  exerciseStats: { total: 0, correct: 0 },
  writingText: "",
  writingMatches: [],
  cloud: {
    supabaseUrl: "",
    supabaseAnonKey: "",
    email: "",
    userId: "",
    lastSyncAt: "",
    status: "",
  },
};

let state = loadState();
let toastTimer = null;

const app = document.querySelector("#app");
const profileLine = document.querySelector("#profileLine");
const localeButton = document.querySelector("#localeButton");
const speakButton = document.querySelector("#speakButton");
const navItems = [...document.querySelectorAll(".nav-item")];
const profileKeys = [
  "currentIndex",
  "goal",
  "level",
  "dailyTarget",
  "learned",
  "sessions",
  "saved",
  "dictionaryCache",
  "dailyLessons",
  "selectedGrammar",
  "grammarAnswers",
  "grammarPractice",
  "placementAnswers",
  "placementResult",
  "exerciseIndex",
  "exerciseAnswer",
  "exerciseStats",
  "writingText",
  "writingMatches",
];

function freshDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function freshProfileState() {
  const base = freshDefaultState();
  return Object.fromEntries(profileKeys.map((key) => [key, base[key]]));
}

function readProfileSnapshot(source = state) {
  return Object.fromEntries(profileKeys.map((key) => [key, JSON.parse(JSON.stringify(source[key]))]));
}

function applyProfileSnapshot(profileId) {
  const snapshot = state.profileStore?.[profileId] || freshProfileState();
  profileKeys.forEach((key) => {
    state[key] = JSON.parse(JSON.stringify(snapshot[key]));
  });
}

function persistActiveProfile() {
  state.profileStore ||= {};
  state.profileStore[state.activeProfileId] = readProfileSnapshot();
}

function loadState() {
  try {
    const base = freshDefaultState();
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const nextState = {
      ...base,
      ...savedState,
      learned: { ...base.learned, ...(savedState?.learned || {}) },
      sessions: { ...base.sessions, ...(savedState?.sessions || {}) },
      dictionaryCache: { ...base.dictionaryCache, ...(savedState?.dictionaryCache || {}) },
      dailyLessons: { ...base.dailyLessons, ...(savedState?.dailyLessons || {}) },
      grammarAnswers: { ...base.grammarAnswers, ...(savedState?.grammarAnswers || {}) },
      grammarPractice: { ...base.grammarPractice, ...(savedState?.grammarPractice || {}) },
      placementAnswers: { ...base.placementAnswers, ...(savedState?.placementAnswers || {}) },
      exerciseStats: { ...base.exerciseStats, ...(savedState?.exerciseStats || {}) },
      writingMatches: savedState?.writingMatches || base.writingMatches,
      cloud: { ...base.cloud, ...(savedState?.cloud || {}) },
    };
    nextState.profiles = savedState?.profiles?.length ? savedState.profiles : base.profiles;
    nextState.activeProfileId = savedState?.activeProfileId || nextState.profiles[0].id;
    nextState.profileStore = savedState?.profileStore || {
      [nextState.activeProfileId]: readProfileSnapshot(nextState),
    };
    const snapshot = nextState.profileStore[nextState.activeProfileId] || readProfileSnapshot(nextState);
    profileKeys.forEach((key) => {
      nextState[key] = JSON.parse(JSON.stringify(snapshot[key]));
    });
    return nextState;
  } catch {
    return freshDefaultState();
  }
}

function saveState() {
  persistActiveProfile();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSupabaseClient() {
  if (!state.cloud?.supabaseUrl || !state.cloud?.supabaseAnonKey || !window.supabase?.createClient) return null;
  window.__englishLabSupabase ||= window.supabase.createClient(state.cloud.supabaseUrl, state.cloud.supabaseAnonKey, {
    auth: { persistSession: true, detectSessionInUrl: true },
  });
  return window.__englishLabSupabase;
}

function serializableCloudState() {
  persistActiveProfile();
  const { cloud, ...rest } = state;
  return rest;
}

async function refreshCloudSession() {
  const client = getSupabaseClient();
  if (!client) return null;
  const { data } = await client.auth.getSession();
  const userId = data?.session?.user?.id || "";
  if (userId && state.cloud.userId !== userId) {
    state.cloud.userId = userId;
    saveState();
  }
  return data?.session || null;
}

async function sendLoginLink(email) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase not configured");
  const redirectTo = `${location.origin}${location.pathname}`;
  const { error } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
  if (error) throw error;
}

async function syncUpToCloud() {
  const client = getSupabaseClient();
  const session = await refreshCloudSession();
  if (!client || !session?.user?.id) throw new Error("No cloud session");
  const { error } = await client.from("learning_states").upsert({
    user_id: session.user.id,
    state: serializableCloudState(),
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
  state.cloud.lastSyncAt = new Date().toISOString();
  state.cloud.status = "ok";
  saveState();
}

async function syncDownFromCloud() {
  const client = getSupabaseClient();
  const session = await refreshCloudSession();
  if (!client || !session?.user?.id) throw new Error("No cloud session");
  const { data, error } = await client.from("learning_states").select("state").eq("user_id", session.user.id).single();
  if (error && error.code !== "PGRST116") throw error;
  if (data?.state) {
    const cloud = state.cloud;
    state = { ...freshDefaultState(), ...data.state, cloud };
    applyProfileSnapshot(state.activeProfileId);
  }
  state.cloud.lastSyncAt = new Date().toISOString();
  state.cloud.status = "ok";
  saveState();
}

function t(key) {
  return labels[state.locale][key] || labels.vi[key] || key;
}

function getActiveProfile() {
  return state.profiles.find((profile) => profile.id === state.activeProfileId) || state.profiles[0];
}

function switchProfile(profileId) {
  if (!state.profiles.some((profile) => profile.id === profileId)) return;
  persistActiveProfile();
  state.activeProfileId = profileId;
  state.profileStore ||= {};
  state.profileStore[profileId] ||= freshProfileState();
  applyProfileSnapshot(profileId);
  saveState();
  render();
}

function addProfile(name) {
  const cleanName = name.trim().slice(0, 28);
  if (!cleanName) return;
  persistActiveProfile();
  const id = `profile-${Date.now()}`;
  state.profiles.push({ id, name: cleanName });
  state.profileStore[id] = freshProfileState();
  state.activeProfileId = id;
  applyProfileSnapshot(id);
  saveState();
  render();
}

function dateKey(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function addDays(days, from = new Date()) {
  const next = new Date(from);
  next.setDate(next.getDate() + days);
  return dateKey(next);
}

function daysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return dateKey(date);
}

function humanDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat(state.locale === "vi" ? "vi-VN" : "en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

function isLevelAllowed(item) {
  const current = levels.indexOf(state.level);
  const itemLevel = levels.indexOf(item.level);
  return itemLevel <= Math.max(current, 0);
}

function getPool() {
  const byGoal = vocabulary.filter((item) => item.goals.includes(state.goal));
  const allowed = byGoal.filter(isLevelAllowed);
  return allowed.length ? allowed : vocabulary.filter(isLevelAllowed);
}

function seededNumber(seed) {
  let hash = 2166136261;
  for (const char of seed) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function seededShuffle(items, seed) {
  const shuffled = [...items];
  let value = seededNumber(seed) || 1;
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    value = (value * 1664525 + 1013904223) >>> 0;
    const swapIndex = value % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function getDailyLesson(day = dateKey()) {
  state.dailyLessons ||= {};
  if (state.dailyLessons[day]?.length) return state.dailyLessons[day];
  const dueWords = getDueWords();
  const learnedWords = new Set(Object.keys(state.learned));
  const newWords = seededShuffle(
    getPool()
      .filter((item) => !learnedWords.has(item.word))
      .map((item) => item.word),
    `${state.activeProfileId}:${state.goal}:${state.level}:${day}`,
  );
  const backupWords = seededShuffle(
    getPool().map((item) => item.word),
    `${state.activeProfileId}:backup:${day}`,
  );
  const lesson = [...new Set([...dueWords, ...newWords, ...backupWords])].slice(0, Math.max(state.dailyTarget, 4));
  state.dailyLessons[day] = lesson;
  saveState();
  return lesson;
}

function getWordByText(word) {
  return vocabulary.find((item) => item.word === word) || getPool()[0] || vocabulary[0];
}

function getCurrentWord() {
  const source = state.activeTab === "today" ? getDailyLesson().map(getWordByText) : getPool();
  return source[state.currentIndex % source.length] || vocabulary[0];
}

function getLearnedEntries() {
  return Object.entries(state.learned);
}

function getDueWords() {
  const today = dateKey();
  return getLearnedEntries()
    .filter(([, value]) => value.dueDate <= today)
    .map(([word]) => word);
}

function getTodaySession() {
  const today = dateKey();
  state.sessions[today] ||= { count: 0, words: [] };
  return state.sessions[today];
}

function todayCount() {
  return state.sessions[dateKey()]?.count || 0;
}

function computeStreak() {
  let count = 0;
  for (let index = 0; index < 365; index += 1) {
    const key = daysAgo(index);
    if (!state.sessions[key]?.count) break;
    count += 1;
  }
  return count;
}

function getStats() {
  return {
    streak: computeStreak(),
    learned: getLearnedEntries().length,
    due: getDueWords().length,
    saved: state.saved.length,
    today: todayCount(),
    target: state.dailyTarget,
  };
}

function normalizeDictionary(data) {
  const entry = Array.isArray(data) ? data[0] : null;
  if (!entry) return null;
  const meanings = entry.meanings || [];
  const firstMeaning = meanings[0] || {};
  const firstDefinition = firstMeaning.definitions?.[0] || {};
  const audio = (entry.phonetics || []).find((item) => item.audio)?.audio || "";
  const synonyms = meanings.flatMap((meaning) => meaning.synonyms || []).slice(0, 6);
  return {
    word: entry.word,
    phonetic: entry.phonetic || entry.phonetics?.find((item) => item.text)?.text || "",
    audio,
    partOfSpeech: firstMeaning.partOfSpeech || "",
    definition: firstDefinition.definition || "",
    example: firstDefinition.example || "",
    synonyms,
    sourceUrls: entry.sourceUrls || [],
  };
}

async function lookupDictionary(word) {
  const cleanWord = word.trim().toLowerCase();
  if (!cleanWord) return null;
  if (state.dictionaryCache[cleanWord]) return state.dictionaryCache[cleanWord];
  const response = await fetch(`${API_BASE}${encodeURIComponent(cleanWord)}`);
  if (!response.ok) throw new Error(`Lookup failed: ${response.status}`);
  const normalized = normalizeDictionary(await response.json());
  if (!normalized) throw new Error("No dictionary entry");
  state.dictionaryCache[cleanWord] = normalized;
  saveState();
  return normalized;
}

function markReview(word, rating) {
  const intervals = {
    again: 0,
    hard: 1,
    good: 3,
    easy: 7,
  };
  const today = dateKey();
  const previous = state.learned[word] || { reviews: 0 };
  state.learned[word] = {
    ...previous,
    reviews: previous.reviews + 1,
    rating,
    lastSeen: today,
    dueDate: addDays(intervals[rating] ?? 1),
  };
  const session = getTodaySession();
  session.count += 1;
  if (!session.words.includes(word)) session.words.push(word);
  saveState();
  showToast(t("reviewed"));
  render();
}

function toggleSaved(word) {
  const exists = state.saved.includes(word);
  state.saved = exists ? state.saved.filter((item) => item !== word) : [...state.saved, word];
  saveState();
  showToast(exists ? t("removedWord") : t("savedWord"));
  render();
}

function setTab(tab) {
  state.activeTab = tab;
  saveState();
  render();
}

function nextWord() {
  const pool = state.activeTab === "today" ? getDailyLesson().map(getWordByText) : getPool();
  state.currentIndex = (state.currentIndex + 1) % pool.length;
  saveState();
  render();
}

function shuffleWord() {
  const pool = state.activeTab === "today" ? getDailyLesson().map(getWordByText) : getPool();
  const currentWord = getCurrentWord().word;
  if (pool.length <= 1) return;
  let nextIndex = state.currentIndex;
  while (pool[nextIndex % pool.length]?.word === currentWord) {
    nextIndex = Math.floor(Math.random() * pool.length);
  }
  state.currentIndex = nextIndex;
  saveState();
  render();
}

function syncChrome() {
  document.documentElement.lang = state.locale;
  localeButton.textContent = state.locale.toUpperCase();
  profileLine.textContent = `${getActiveProfile()?.name || "Tôi"} · ${state.goal} · ${state.level}`;
  navItems.forEach((item) => {
    const isActive = item.dataset.tab === state.activeTab;
    item.classList.toggle("is-active", isActive);
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function chip(text) {
  return `<span class="chip">${escapeHtml(text)}</span>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderWordCard(item) {
  const learned = state.learned[item.word];
  const saved = state.saved.includes(item.word);
  return `
    <article class="word-card">
      <div class="word-card-head">
        <div>
          <span class="pill">${item.level} · ${escapeHtml(item.pos)}</span>
          <h1>${escapeHtml(item.word)}</h1>
          <p class="phonetic">${escapeHtml(item.phonetic)}</p>
        </div>
        <button class="round-button ${saved ? "is-saved" : ""}" type="button" data-save-word="${escapeHtml(item.word)}" aria-label="${t("save")}">★</button>
      </div>
      <p class="word-meaning">${escapeHtml(state.locale === "vi" ? item.vi : item.en)}</p>
      <p class="word-note">${escapeHtml(state.locale === "vi" ? item.noteVi : item.noteEn)}</p>
      <div class="example-block">
        <p>${escapeHtml(item.example)}</p>
        <small>${escapeHtml(item.exampleVi)}</small>
      </div>
      <div class="meta-grid">
        <div>
          <strong>${t("wordFamily")}</strong>
          <div class="chip-row">${item.family.map(chip).join("")}</div>
        </div>
        <div>
          <strong>${t("grammarMap")}</strong>
          <div class="chip-row">${item.grammar.map(chip).join("")}</div>
        </div>
      </div>
      <div class="chip-row">${item.collocations.map(chip).join("")}</div>
      ${
        learned
          ? `<span class="status-pill">${t("nextReview")}: ${humanDate(learned.dueDate)}</span>`
          : ""
      }
      <div class="review-actions">
        <button class="review-button muted" type="button" data-rating="again" data-word="${escapeHtml(item.word)}">${t("again")}</button>
        <button class="review-button warn" type="button" data-rating="hard" data-word="${escapeHtml(item.word)}">${t("hard")}</button>
        <button class="review-button ok" type="button" data-rating="good" data-word="${escapeHtml(item.word)}">${t("good")}</button>
        <button class="review-button strong" type="button" data-rating="easy" data-word="${escapeHtml(item.word)}">${t("easy")}</button>
      </div>
    </article>
  `;
}

function renderDashboardBand() {
  const stats = getStats();
  const percent = Math.min(100, Math.round((stats.today / stats.target) * 100));
  return `
    <section class="dashboard-band">
      <div class="section-title">
        <div>
          <h1>${t("todayTitle")}</h1>
          <p>${t("todaySub")}</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-button" type="button" data-action="shuffle">${t("shuffle")}</button>
          <button class="primary-button" type="button" data-action="next">${t("nextWord")}</button>
        </div>
      </div>
      <div class="metric-row">
        <div class="metric"><strong>${stats.streak}</strong><small>${t("streak")}</small></div>
        <div class="metric"><strong>${stats.today}/${stats.target}</strong><small>${t("dailyGoal")}</small></div>
        <div class="metric"><strong>${stats.due}</strong><small>${t("due")}</small></div>
        <div class="metric"><strong>${stats.saved}</strong><small>${t("saved")}</small></div>
      </div>
      <div class="progress-track" aria-label="${t("dailyGoal")}">
        <div class="progress-fill" style="width: ${percent}%"></div>
      </div>
    </section>
  `;
}

function renderToday() {
  const item = getCurrentWord();
  const queue = getDailyLesson();
  app.innerHTML = `
    <div class="view split-view">
      <div class="view">
        ${renderDashboardBand()}
        ${renderWordCard(item)}
      </div>
      <aside class="view">
        <section class="progress-card">
          <h3>${t("dailyLesson")}</h3>
          ${renderWordList(queue.slice(0, 8), t("noDue"))}
        </section>
        ${renderLookupCard(item.word)}
      </aside>
    </div>
  `;
}

function renderVocab() {
  const item = getCurrentWord();
  const pool = getPool();
  app.innerHTML = `
    <div class="view split-view">
      <div class="view">
        <div class="section-title">
          <div>
            <h1>${t("vocabTitle")}</h1>
            <p>${state.goal} · ${state.level}</p>
          </div>
          <div class="inline-actions">
            <button class="secondary-button" type="button" data-action="shuffle">${t("shuffle")}</button>
            <button class="primary-button" type="button" data-action="next">${t("nextWord")}</button>
          </div>
        </div>
        ${renderWordCard(item)}
      </div>
      <aside class="view">
        ${renderLookupCard(item.word)}
        <section class="progress-card">
          <h3>${state.goal}</h3>
          ${renderWordList(pool.map((word) => word.word), "")}
        </section>
      </aside>
    </div>
  `;
}

function renderLookupCard(defaultWord = "") {
  return `
    <section class="lookup-card">
      <form class="lookup-form" data-lookup-form>
        <input name="word" type="search" value="${escapeHtml(defaultWord)}" placeholder="${t("lookupPlaceholder")}" autocomplete="off" autocapitalize="none" />
        <button class="secondary-button" type="submit">⌕</button>
      </form>
      <div class="dictionary-result" data-dictionary-result></div>
      <div class="source-row">
        <span>${t("attribution")}</span>
        <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">${t("source")}</a>
      </div>
    </section>
  `;
}

function renderDictionaryResult(entry) {
  const synonyms = entry.synonyms?.length ? `<div class="chip-row">${entry.synonyms.map(chip).join("")}</div>` : "";
  return `
    <h3>${escapeHtml(entry.word)} ${entry.phonetic ? `<span class="phonetic">${escapeHtml(entry.phonetic)}</span>` : ""}</h3>
    <p><strong>${escapeHtml(entry.partOfSpeech || "")}</strong> ${escapeHtml(entry.definition || "")}</p>
    ${entry.example ? `<div class="example-block"><p>${escapeHtml(entry.example)}</p></div>` : ""}
    ${synonyms}
    <button class="secondary-button" type="button" data-speak-word="${escapeHtml(entry.word)}">${t("pronunciation")}</button>
  `;
}

function renderGrammar() {
  const selected = grammarTopics.find((topic) => topic.id === state.selectedGrammar) || grammarTopics[0];
  app.innerHTML = `
    <div class="view split-view">
      <div class="view">
        <div class="section-title">
          <div>
            <h1>${t("grammarTitle")}</h1>
            <p>${state.level} · ${state.goal}</p>
          </div>
        </div>
        <div class="grammar-grid">
          ${grammarTopics
            .map((topic) => {
              const title = state.locale === "vi" ? topic.titleVi : topic.titleEn;
              const selectedClass = topic.id === selected.id ? "is-selected" : "";
              return `
                <button class="grammar-card ${selectedClass}" type="button" data-grammar="${topic.id}">
                  <h3>${escapeHtml(title)}</h3>
                  <div class="chip-row">${topic.focus.map(chip).join("")}</div>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
      <aside class="view">
        <section class="grammar-card is-selected">
          <h3>${escapeHtml(state.locale === "vi" ? selected.titleVi : selected.titleEn)}</h3>
          <ul class="grammar-list">
            ${selected.examples
              .map(([en, vi]) => `<li><strong>${escapeHtml(en)}</strong><p>${escapeHtml(vi)}</p></li>`)
              .join("")}
          </ul>
        </section>
        ${renderGrammarQuiz(selected)}
        ${renderWritingLab()}
      </aside>
    </div>
  `;
}

function renderGrammarQuiz(topic) {
  const quizzes = getTopicQuizzes(topic);
  state.grammarPractice[topic.id] ||= { index: 0, selected: null, total: 0, correct: 0 };
  const practice = state.grammarPractice[topic.id];
  const quiz = quizzes[practice.index % quizzes.length];
  const answer = practice.selected;
  return `
    <section class="progress-card">
      <h3>${t("grammarPractice")}</h3>
      <p>${escapeHtml(quiz.question)}</p>
      <div class="choice-grid">
        ${quiz.choices
          .map((choice) => {
            const isAnswered = Boolean(answer);
            const isCorrect = answer === choice && choice === quiz.answer;
            const isWrong = answer === choice && choice !== quiz.answer;
            return `<button class="choice-button ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-quiz-topic="${topic.id}" data-choice="${escapeHtml(choice)}" ${isAnswered ? "disabled" : ""}>${escapeHtml(choice)}</button>`;
          })
          .join("")}
      </div>
      ${
        answer
          ? `<p>${answer === quiz.answer ? t("correct") : t("wrong")}: ${escapeHtml(quiz.answer)}</p><p><strong>${t("explanation")}:</strong> ${escapeHtml(quiz.explanation)}</p><button class="secondary-button" type="button" data-next-quiz="${topic.id}">${t("nextQuestion")}</button>`
          : ""
      }
    </section>
  `;
}

function getTopicQuizzes(topic) {
  const base = [
    {
      ...topic.quiz,
      explanation: topic.focus[0] || topic.titleEn,
    },
  ];
  if (topic.id === "modal-requests") {
    base.push(
      {
        question: "___ you summarize the article?",
        choices: ["Could", "Because", "Although"],
        answer: "Could",
        explanation: "Dùng Could you + verb để yêu cầu lịch sự.",
      },
      {
        question: "Please ___ the booking details.",
        choices: ["confirm", "confirmation", "confirmed"],
        answer: "confirm",
        explanation: "Sau Please dùng động từ nguyên mẫu.",
      },
    );
  }
  if (topic.id === "before-gerund") {
    base.push(
      {
        question: "Prioritize useful words before ___ rare ones.",
        choices: ["memorizing", "memorize", "memorized"],
        answer: "memorizing",
        explanation: "Sau before dùng V-ing khi nói về hành động.",
      },
      {
        question: "Evaluate the options before ___ a tool.",
        choices: ["choosing", "choose", "chosen"],
        answer: "choosing",
        explanation: "before + V-ing: trước khi làm gì.",
      },
    );
  }
  if (topic.id === "that-clauses") {
    base.push(
      {
        question: "Do not assume ___ everyone learns the same way.",
        choices: ["that", "than", "which"],
        answer: "that",
        explanation: "assume that + clause để nói điều được giả định.",
      },
      {
        question: "The report provides evidence ___ the plan works.",
        choices: ["that", "what", "when"],
        answer: "that",
        explanation: "evidence that + clause để nêu bằng chứng cho một kết luận.",
      },
    );
  }
  if (topic.id === "comparatives") {
    base.push(
      {
        question: "This approach is ___ efficient.",
        choices: ["more", "most", "many"],
        answer: "more",
        explanation: "Tính từ dài thường dùng more + adjective.",
      },
      {
        question: "The sentence is ___ to understand now.",
        choices: ["easier", "easy", "easiest"],
        answer: "easier",
        explanation: "So sánh hơn của easy là easier.",
      },
    );
  }
  return base;
}

function renderWritingLab() {
  return `
    <section class="settings-card">
      <h3>${t("writingLab")}</h3>
      <form class="view" data-writing-form>
        <div class="field">
          <textarea name="writingText" placeholder="${t("writingPlaceholder")}">${escapeHtml(state.writingText || "")}</textarea>
        </div>
        <button class="secondary-button" type="submit">${t("checkWriting")}</button>
      </form>
      <p>${t("writingResult")}</p>
      ${state.writingText ? renderWritingMatches() : ""}
    </section>
  `;
}

function buildExerciseQuestions() {
  const learnedWords = Object.keys(state.learned);
  const source = learnedWords.length ? learnedWords.map(getWordByText) : getDailyLesson().map(getWordByText);
  return source.flatMap((item, index) => {
    const distractors = seededShuffle(
      vocabulary.filter((word) => word.word !== item.word).map((word) => (state.locale === "vi" ? word.vi : word.en)),
      `${item.word}:meaning:${index}`,
    ).slice(0, 2);
    const meaningAnswer = state.locale === "vi" ? item.vi : item.en;
    const fillChoices = seededShuffle([item.word, ...seededShuffle(getPool().filter((word) => word.word !== item.word).map((word) => word.word), `${item.word}:fill`).slice(0, 2)], `${item.word}:choices`);
    return [
      {
        type: "meaning",
        question: state.locale === "vi" ? `Từ "${item.word}" gần nghĩa với câu nào?` : `What does "${item.word}" mean?`,
        choices: seededShuffle([meaningAnswer, ...distractors], `${item.word}:meaningChoices`),
        answer: meaningAnswer,
        explanation: `${item.word}: ${meaningAnswer}`,
      },
      {
        type: "blank",
        question: item.example.replace(new RegExp(`\\b${item.word}\\b`, "i"), "_____"),
        choices: fillChoices,
        answer: item.word,
        explanation: item.exampleVi,
      },
    ];
  });
}

function renderExercises() {
  const questions = buildExerciseQuestions();
  const question = questions[state.exerciseIndex % questions.length];
  const answer = state.exerciseAnswer;
  app.innerHTML = `
    <div class="view split-view">
      <div class="view">
        <div class="section-title">
          <div>
            <h1>${t("exercisesTitle")}</h1>
            <p>${t("exercisesSub")}</p>
          </div>
        </div>
        <section class="word-card">
          <span class="pill">${question.type}</span>
          <p class="word-meaning">${escapeHtml(question.question)}</p>
          <div class="choice-grid">
            ${question.choices
              .map((choice) => {
                const isCorrect = answer === choice && choice === question.answer;
                const isWrong = answer === choice && choice !== question.answer;
                return `<button class="choice-button ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-exercise-choice="${escapeHtml(choice)}" ${answer ? "disabled" : ""}>${escapeHtml(choice)}</button>`;
              })
              .join("")}
          </div>
          ${
            answer
              ? `<p>${answer === question.answer ? t("correct") : t("wrong")}: ${escapeHtml(question.answer)}</p><p><strong>${t("explanation")}:</strong> ${escapeHtml(question.explanation)}</p><button class="primary-button" type="button" data-action="next-exercise">${t("nextQuestion")}</button>`
              : ""
          }
        </section>
      </div>
      <aside class="view">
        <section class="progress-card">
          <h3>${t("progressTitle")}</h3>
          <p>${state.exerciseStats.correct}/${state.exerciseStats.total} ${t("correct")}</p>
        </section>
        <section class="progress-card">
          <h3>${t("dailyLesson")}</h3>
          ${renderWordList(getDailyLesson(), t("reviewFirst"))}
        </section>
      </aside>
    </div>
  `;
}

function renderProgress() {
  const stats = getStats();
  app.innerHTML = `
    <div class="view">
      <div class="section-title">
        <div>
          <h1>${t("progressTitle")}</h1>
          <p>${t("familyGoal")} · ${state.goal} · ${state.level}</p>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><strong>${stats.streak}</strong><span>${t("streak")}</span></div>
        <div class="stat-card"><strong>${stats.learned}</strong><span>${t("learned")}</span></div>
        <div class="stat-card"><strong>${stats.due}</strong><span>${t("due")}</span></div>
        <div class="stat-card"><strong>${stats.saved}</strong><span>${t("saved")}</span></div>
      </div>
      <div class="split-view">
        <section class="progress-card">
          <h3>${t("sevenDays")}</h3>
          ${renderChart()}
        </section>
        <section class="progress-card">
          <h3>${t("saved")}</h3>
          ${renderWordList(state.saved, t("noSaved"))}
        </section>
      </div>
    </div>
  `;
}

function renderChart() {
  const max = Math.max(1, ...Array.from({ length: 7 }, (_, index) => state.sessions[daysAgo(6 - index)]?.count || 0));
  return `
    <div class="bar-chart">
      ${Array.from({ length: 7 }, (_, index) => {
        const key = daysAgo(6 - index);
        const count = state.sessions[key]?.count || 0;
        const height = Math.max(8, Math.round((count / max) * 100));
        return `
          <div class="bar">
            <div class="bar-fill" style="height: ${height}%"></div>
            <small>${humanDate(key)}</small>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderWordList(words, emptyText) {
  if (!words.length) return `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
  return `
    <ul class="word-list">
      ${words
        .map(
          (word) => `
            <li>
              <span>${escapeHtml(word)}</span>
              <button class="text-button" type="button" data-open-word="${escapeHtml(word)}">${t("start")}</button>
            </li>
          `,
        )
        .join("")}
    </ul>
  `;
}

function renderSettings() {
  app.innerHTML = `
    <div class="view">
      <div class="section-title">
        <div>
          <h1>${t("settingsTitle")}</h1>
          <p>${t("installNote")}</p>
        </div>
      </div>
      <section class="settings-card">
        <h3>${t("profile")}</h3>
        <div class="profile-strip">
          ${state.profiles
            .map(
              (profile) =>
                `<button class="profile-button ${profile.id === state.activeProfileId ? "is-active" : ""}" type="button" data-profile-id="${profile.id}">${escapeHtml(profile.name)}</button>`,
            )
            .join("")}
        </div>
        <form class="lookup-form" data-profile-form>
          <input name="profileName" type="text" placeholder="${t("profileName")}" />
          <button class="secondary-button" type="submit">＋</button>
        </form>
      </section>
      <section class="settings-card">
        <form class="settings-grid" data-settings-form>
          <div class="field">
            <label for="goal">${t("goal")}</label>
            <select id="goal" name="goal">
              ${goals.map((goal) => `<option value="${goal}" ${goal === state.goal ? "selected" : ""}>${goal}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="level">${t("level")}</label>
            <select id="level" name="level">
              ${levels.map((level) => `<option value="${level}" ${level === state.level ? "selected" : ""}>${level}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="dailyTarget">${t("dailyTarget")}</label>
            <input id="dailyTarget" name="dailyTarget" type="number" min="3" max="20" value="${state.dailyTarget}" />
          </div>
          <div class="field">
            <label>&nbsp;</label>
            <button class="primary-button" type="submit">${t("save")}</button>
          </div>
        </form>
      </section>
      <section class="settings-card">
        <h3>${t("cloudSync")}</h3>
        <p>${state.cloud?.userId ? t("cloudReady") : t("cloudMissing")}</p>
        <form class="settings-grid" data-cloud-form>
          <div class="field">
            <label for="supabaseUrl">${t("supabaseUrl")}</label>
            <input id="supabaseUrl" name="supabaseUrl" type="url" value="${escapeHtml(state.cloud.supabaseUrl)}" placeholder="https://xxxx.supabase.co" />
          </div>
          <div class="field">
            <label for="supabaseAnonKey">${t("supabaseKey")}</label>
            <input id="supabaseAnonKey" name="supabaseAnonKey" type="password" value="${escapeHtml(state.cloud.supabaseAnonKey)}" />
          </div>
          <div class="field">
            <label for="email">${t("email")}</label>
            <input id="email" name="email" type="email" value="${escapeHtml(state.cloud.email)}" />
          </div>
          <div class="field">
            <label>&nbsp;</label>
            <button class="secondary-button" type="submit">${t("save")}</button>
          </div>
        </form>
        <div class="inline-actions">
          <button class="secondary-button" type="button" data-action="send-login">${t("sendLogin")}</button>
          <button class="secondary-button" type="button" data-action="sync-up">${t("syncUp")}</button>
          <button class="secondary-button" type="button" data-action="sync-down">${t("syncDown")}</button>
        </div>
      </section>
      ${renderPlacement()}
      <section class="settings-card">
        <h3>${t("source")}</h3>
        <p>${t("attribution")}</p>
        <div class="inline-actions">
          <button class="secondary-button" type="button" data-action="reset">${t("reset")}</button>
        </div>
      </section>
    </div>
  `;
}

function renderPlacement() {
  const answered = Object.keys(state.placementAnswers).length;
  const score = placementQuestions.filter((question, index) => state.placementAnswers[index] === question.answer).length;
  let result = "";
  if (answered === placementQuestions.length) {
    const level = score >= 4 ? "Advanced" : score >= 2 ? "Intermediate" : "Beginner";
    result = `<p>${t("level")}: <strong>${level}</strong> · ${score}/${placementQuestions.length}</p>`;
  }
  return `
    <section class="settings-card">
      <h3>${t("placement")}</h3>
      <div class="placement">
        ${placementQuestions
          .map((question, index) => {
            const selected = state.placementAnswers[index];
            return `
              <div>
                <p><strong>${index + 1}.</strong> ${escapeHtml(question.question)}</p>
                <div class="choice-grid">
                  ${question.choices
                    .map((choice) => {
                      const cls =
                        selected === choice && choice === question.answer
                          ? "is-correct"
                          : selected === choice
                            ? "is-wrong"
                            : "";
                      return `<button class="choice-button ${cls}" type="button" data-placement="${index}" data-choice="${escapeHtml(choice)}" ${selected ? "disabled" : ""}>${escapeHtml(choice)}</button>`;
                    })
                    .join("")}
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
      ${result}
    </section>
  `;
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function speakCurrentWord() {
  speakWord(getCurrentWord().word);
}

function speakWord(word) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

async function handleLookup(form) {
  const result = form.parentElement.querySelector("[data-dictionary-result]");
  const word = new FormData(form).get("word");
  result.innerHTML = `<p>${t("apiLoading")}</p>`;
  try {
    const entry = await lookupDictionary(word);
    result.innerHTML = renderDictionaryResult(entry);
  } catch {
    result.innerHTML = `<p>${t("apiError")}</p>`;
  }
}

async function checkWriting(text) {
  const params = new URLSearchParams();
  params.set("text", text);
  params.set("language", "en-US");
  const response = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  if (!response.ok) throw new Error(`LanguageTool failed: ${response.status}`);
  const data = await response.json();
  return data.matches || [];
}

function renderWritingMatches() {
  if (!state.writingMatches?.length) return `<p>${t("noWritingIssues")}</p>`;
  return `
    <ul class="grammar-list">
      ${state.writingMatches
        .slice(0, 6)
        .map((match) => {
          const replacement = match.replacements?.[0]?.value || "";
          return `<li><strong>${escapeHtml(match.message)}</strong><p>${escapeHtml(replacement ? `${match.context?.text || ""} → ${replacement}` : match.context?.text || "")}</p></li>`;
        })
        .join("")}
    </ul>
  `;
}

function openWord(word) {
  const pool = getPool();
  const index = pool.findIndex((item) => item.word === word);
  if (index >= 0) {
    state.currentIndex = index;
  } else {
    state.currentIndex = vocabulary.findIndex((item) => item.word === word);
  }
  state.activeTab = "vocab";
  saveState();
  render();
}

function bindEvents() {
  localeButton.addEventListener("click", () => {
    state.locale = state.locale === "vi" ? "en" : "vi";
    saveState();
    render();
  });

  speakButton.addEventListener("click", speakCurrentWord);

  navItems.forEach((item) => {
    item.addEventListener("click", () => setTab(item.dataset.tab));
  });

  app.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;

    if (target.dataset.action === "next") nextWord();
    if (target.dataset.action === "shuffle") shuffleWord();
    if (target.dataset.action === "next-exercise") {
      state.exerciseIndex += 1;
      state.exerciseAnswer = null;
      saveState();
      render();
    }
    if (target.dataset.action === "send-login") {
      sendLoginLink(state.cloud.email)
        .then(() => showToast(t("loginSent")))
        .catch(() => showToast(t("syncFailed")));
    }
    if (target.dataset.action === "sync-up") {
      syncUpToCloud()
        .then(() => {
          showToast(t("syncDone"));
          render();
        })
        .catch(() => showToast(t("syncFailed")));
    }
    if (target.dataset.action === "sync-down") {
      syncDownFromCloud()
        .then(() => {
          showToast(t("syncDone"));
          render();
        })
        .catch(() => showToast(t("syncFailed")));
    }
    if (target.dataset.action === "reset") {
      localStorage.removeItem(STORAGE_KEY);
      state = freshDefaultState();
      showToast(t("dataReset"));
      render();
    }
    if (target.dataset.rating && target.dataset.word) markReview(target.dataset.word, target.dataset.rating);
    if (target.dataset.saveWord) toggleSaved(target.dataset.saveWord);
    if (target.dataset.openWord) openWord(target.dataset.openWord);
    if (target.dataset.grammar) {
      state.selectedGrammar = target.dataset.grammar;
      saveState();
      render();
    }
    if (target.dataset.quizTopic) {
      const topic = grammarTopics.find((item) => item.id === target.dataset.quizTopic);
      const practice = state.grammarPractice[target.dataset.quizTopic] || { index: 0, selected: null, total: 0, correct: 0 };
      const quiz = getTopicQuizzes(topic)[practice.index % getTopicQuizzes(topic).length];
      practice.selected = target.dataset.choice;
      practice.total += 1;
      if (target.dataset.choice === quiz.answer) practice.correct += 1;
      state.grammarPractice[target.dataset.quizTopic] = practice;
      saveState();
      render();
    }
    if (target.dataset.nextQuiz) {
      const practice = state.grammarPractice[target.dataset.nextQuiz] || { index: 0, selected: null, total: 0, correct: 0 };
      practice.index += 1;
      practice.selected = null;
      state.grammarPractice[target.dataset.nextQuiz] = practice;
      saveState();
      render();
    }
    if (target.dataset.exerciseChoice) {
      const question = buildExerciseQuestions()[state.exerciseIndex % buildExerciseQuestions().length];
      state.exerciseAnswer = target.dataset.exerciseChoice;
      state.exerciseStats.total += 1;
      if (target.dataset.exerciseChoice === question.answer) state.exerciseStats.correct += 1;
      saveState();
      render();
    }
    if (target.dataset.placement) {
      state.placementAnswers[target.dataset.placement] = target.dataset.choice;
      saveState();
      render();
    }
    if (target.dataset.profileId) switchProfile(target.dataset.profileId);
    if (target.dataset.speakWord) speakWord(target.dataset.speakWord);
  });

  app.addEventListener("submit", (event) => {
    event.preventDefault();
    const lookupForm = event.target.closest("[data-lookup-form]");
    const settingsForm = event.target.closest("[data-settings-form]");
    const profileForm = event.target.closest("[data-profile-form]");
    const cloudForm = event.target.closest("[data-cloud-form]");
    const writingForm = event.target.closest("[data-writing-form]");
    if (lookupForm) handleLookup(lookupForm);
    if (profileForm) {
      const name = new FormData(profileForm).get("profileName");
      addProfile(String(name || ""));
    }
    if (cloudForm) {
      const data = new FormData(cloudForm);
      state.cloud.supabaseUrl = String(data.get("supabaseUrl") || "").trim();
      state.cloud.supabaseAnonKey = String(data.get("supabaseAnonKey") || "").trim();
      state.cloud.email = String(data.get("email") || "").trim();
      window.__englishLabSupabase = null;
      saveState();
      showToast(t("profileSaved"));
      render();
    }
    if (writingForm) {
      const text = String(new FormData(writingForm).get("writingText") || "").trim();
      state.writingText = text;
      state.writingMatches = [];
      saveState();
      checkWriting(text)
        .then((matches) => {
          state.writingMatches = matches;
          saveState();
          render();
        })
        .catch(() => showToast(t("apiError")));
      render();
    }
    if (settingsForm) {
      const data = new FormData(settingsForm);
      state.goal = data.get("goal");
      state.level = data.get("level");
      state.dailyTarget = Number(data.get("dailyTarget")) || defaultState.dailyTarget;
      state.currentIndex = 0;
      saveState();
      showToast(t("profileSaved"));
      render();
    }
  });
}

function render() {
  syncChrome();
  if (state.activeTab === "today") renderToday();
  if (state.activeTab === "vocab") renderVocab();
  if (state.activeTab === "grammar") renderGrammar();
  if (state.activeTab === "exercises") renderExercises();
  if (state.activeTab === "progress") renderProgress();
  if (state.activeTab === "settings") renderSettings();
  syncChrome();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

bindEvents();
render();
refreshCloudSession().then(() => render()).catch(() => {});
