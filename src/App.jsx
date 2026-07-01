import { useState } from "react";

const fields = [
  { name: "fullName", label: "First Name – Surname", type: "text", required: true, placeholder: "e.g. Priya Sharma" },
  { name: "phone", label: "Mobile Number", type: "text", required: true, placeholder: "e.g. +61 400 000 000" },
  { name: "email", label: "Email Address", type: "text", required: true, placeholder: "e.g. priya@example.com" },
  {
    name: "interest",
    label: "What are you most interested in right now?",
    type: "radio",
    options: ["Business", "Accounting", "IT / Cyber Security", "Early Childhood Education", "Not sure yet"],
    required: true,
  },
  {
    name: "situation",
    label: "Which option best describes you?",
    type: "radio",
    options: [
      "I have no idea what to do",
      "I have some ideas but need directions",
      "I know what I want but need a pathway",
    ],
    required: true,
  },
  {
    name: "startTime",
    label: "When are you thinking of starting?",
    type: "radio",
    options: ["ASAP (next intake)", "In a few months", "Just exploring"],
    required: true,
  },
];

// Zalo contact number (no dial code separators, digits only, no leading +)
const ZALO_NUMBER = "84777799955";
const WEBHOOK_URL = "https://script.google.com/macros/library/d/1FIv7pj1jKNDIIMGNnYml7iTYOW6Vd0oPNF5uW37P-dvUNCYARLuHcUP_/1";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", interest: "", situation: "", startTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    fields.forEach((f) => {
      if (f.required && !formData[f.name]) {
        newErrors[f.name] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const { fullName, phone, email, interest, situation, startTime } = formData;

    const payload = JSON.stringify({
      fullName,
      phone,
      email,
      interest,
      situation,
      startTime,
      requestId: Date.now(),
    });

    const blob = new Blob([payload], { type: "text/plain" });
    navigator.sendBeacon(WEBHOOK_URL, blob);

    await new Promise((r) => setTimeout(r, 300));

    // Zalo does not support pre-filled message text like WhatsApp's ?text= param,
    // so we just deep-link to the chat. Lead details are captured via the webhook above.
    window.location.href = `https://zalo.me/${ZALO_NUMBER}`;

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] via-[#fafafa] to-[#f0fff4] flex flex-col items-center px-4 pt-10 pb-16 relative overflow-hidden font-sans text-slate-800">
      <div className="fixed -top-[100px] -right-[100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,104,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="fixed -bottom-[100px] -left-[100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[440px] animate-fade-up relative z-10">
        <header className="text-center mb-8">
          <div className="inline-block bg-blue-500/10 text-blue-600 text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-4 tracking-wide">
            🎓 Study in Australia
          </div>
          <h1 className="font-serif text-[clamp(28px,6vw,38px)] font-bold text-slate-900 leading-[1.2] mb-3.5 tracking-tight">
            Find Your Study Path<br />in Australia
          </h1>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-[340px] mx-auto">
            Answer a few questions and get personalised guidance — instantly on Zalo.
          </p>
        </header>

        <div className="bg-white rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.04),0_20px_60px_rgba(0,0,0,0.08)] p-8 border border-slate-200/80">
          <form onSubmit={handleSubmit} noValidate>
            {fields.map((field) => (
              <div key={field.name} className="mb-6">
                <label className="block text-sm font-semibold text-slate-800 mb-2.5 leading-snug">{field.label}</label>

                {field.type === "text" && (
                  <>
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className={`w-full p-3 text-[15px] border-[1.5px] rounded-xl outline-none text-slate-800 bg-slate-50 transition-all focus:bg-white focus:ring-[3px] focus:ring-blue-500/10 ${
                        errors[field.name] ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                      }`}
                    />
                    {errors[field.name] && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors[field.name]}</p>}
                  </>
                )}

                {field.type === "radio" && (
                  <>
                    <div className="flex flex-col gap-2.5">
                      {field.options.map((opt) => (
                        <label key={opt} className="radio-group-label">
                          <input
                            type="radio"
                            name={field.name}
                            value={opt}
                            checked={formData[field.name] === opt}
                            onChange={() => handleChange(field.name, opt)}
                            className="sr-only"
                          />
                          <span className="radio-circle"><span className="radio-dot"></span></span>
                          <span className="text-sm text-slate-700 font-medium">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors[field.name] && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors[field.name]}</p>}
                  </>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full p-[15px_24px] bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none rounded-xl text-[15px] font-semibold cursor-pointer mt-2 transition-all shadow-[0_4px_14px_rgba(59,130,246,0.35)] hover:from-blue-600 hover:to-blue-700 hover:shadow-[0_6px_20px_rgba(59,130,246,0.45)] hover:-translate-y-[1px] disabled:from-blue-300 disabled:to-blue-400 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none flex items-center justify-center gap-2.5"
            >
              {loading ? (
                <span className="flex items-center gap-2.5">
                  <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin-slow"></span>
                  Redirecting to Zalo…
                </span>
              ) : (
                <span className="flex items-center gap-2.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="white" strokeWidth="1.2" opacity="0.35"/>
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Zalo</text>
                  </svg>
                  Continue to Zalo
                </span>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-[18px] font-medium">
            🔒 Your details are safe and will only be used to guide you.
          </p>
        </div>

        <footer className="text-center mt-7 text-xs text-slate-400">
          <p>© 2025 · Powered by expert education guidance</p>
        </footer>
      </div>
    </div>
  );
}
