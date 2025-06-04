
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.subscribe": "Subscribe",
    "nav.support": "Support",
    
    // Home page
    "about.title": "About Me",
    "about.readMore": "Read More",
    "blog.latestPosts": "Latest Posts",
    
    // Blog detail
    "blog.relatedPosts": "Related Posts",
    "comments.title": "Comments",
    "comments.leave": "Leave a Comment",
    "comments.yourName": "Your Name",
    "comments.thoughts": "Share your thoughts...",
    "comments.post": "Post Comment",
    
    // Subscribe page
    "subscribe.title": "Subscribe to Our Newsletter",
    "subscribe.description": "Stay updated with our latest articles, stories, and insights. We promise not to spam your inbox!",
    "subscribe.name": "Name",
    "subscribe.email": "Email",
    "subscribe.button": "Subscribe",
    "subscribe.contact": "Contact Us",
    "subscribe.questions": "Have questions, suggestions, or just want to say hello? Feel free to reach out to us.",
    "subscribe.emailUs": "Email:",
    
    // Donate page
    "donate.title": "Buy Me a Coffee",
    "donate.description": "If you enjoy my blog and would like to support my work, consider buying me a coffee. Your donation helps keep this blog running and ad-free.",
    "donate.button": "Donate",
    "donate.processing": "Processing...",
    "donate.secure": "All transactions are secure. Your support means the world to me!",
    "donate.other": "Other Ways to Support",
    "donate.otherDesc": "Share my articles, follow me on social media, or simply send a kind message. Your support in any form is greatly appreciated!",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
  vi: {
    // Navigation
    "nav.home": "Trang chủ",
    "nav.subscribe": "Đăng ký",
    "nav.support": "Hỗ trợ",
    
    // Home page
    "about.title": "Về tôi",
    "about.readMore": "Xem thêm",
    "blog.latestPosts": "Bài viết mới nhất",
    
    // Blog detail
    "blog.relatedPosts": "Bài viết liên quan",
    "comments.title": "Bình luận",
    "comments.leave": "Để lại bình luận",
    "comments.yourName": "Tên của bạn",
    "comments.thoughts": "Chia sẻ suy nghĩ của bạn...",
    "comments.post": "Đăng bình luận",
    
    // Subscribe page
    "subscribe.title": "Đăng ký nhận bản tin",
    "subscribe.description": "Cập nhật các bài viết, câu chuyện và thông tin mới nhất. Chúng tôi hứa không gửi thư rác!",
    "subscribe.name": "Tên",
    "subscribe.email": "Email",
    "subscribe.button": "Đăng ký",
    "subscribe.contact": "Liên hệ với chúng tôi",
    "subscribe.questions": "Có câu hỏi, đề xuất hoặc chỉ muốn chào hỏi? Hãy liên hệ với chúng tôi.",
    "subscribe.emailUs": "Email:",
    
    // Donate page
    "donate.title": "Mua cho tôi một ly cà phê",
    "donate.description": "Nếu bạn thích blog của tôi và muốn hỗ trợ công việc của tôi, hãy mua cho tôi một ly cà phê. Đóng góp của bạn giúp blog này tiếp tục hoạt động và không có quảng cáo.",
    "donate.button": "Quyên góp",
    "donate.processing": "Đang xử lý...",
    "donate.secure": "Tất cả giao dịch đều an toàn. Sự hỗ trợ của bạn rất có ý nghĩa đối với tôi!",
    "donate.other": "Các cách hỗ trợ khác",
    "donate.otherDesc": "Chia sẻ bài viết, theo dõi tôi trên mạng xã hội hoặc gửi tin nhắn thân thiện. Sự hỗ trợ của bạn dưới bất kỳ hình thức nào đều được đánh giá cao!",
    
    // Footer
    "footer.rights": "Đã đăng ký bản quyền.",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const getBodyFont = (language: Language) => {
  return language === "en" ? "font-minion" : "font-inter";
};
