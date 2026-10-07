import { useState, FormEvent } from 'react';
import { Mail, Check, Copy, Send, Github, Linkedin, MapPin, AlertCircle, Sparkles } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const myEmail = 'kumarinish007@gmail.com';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(myEmail);
        setCopiedEmail(true);
        setCopyFailed(false);
        setTimeout(() => setCopiedEmail(false), 2500);
        return;
      }

      // Fallback for browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = myEmail;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (success) {
        setCopiedEmail(true);
        setCopyFailed(false);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopyFailed(true);
        setTimeout(() => setCopyFailed(false), 2500);
      }
    } catch {
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 2500);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message before sending.');
      return;
    }

    // Bot honeypot check
    if (formData.botcheck) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn('VITE_WEB3FORMS_KEY is missing. Configure it in your .env or deployment environment variables.');
      setStatus('error');
      setErrorMessage("The form isn't working right now. Please email me directly at kumarinish007@gmail.com.");
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio message from ${formData.name.trim()}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', botcheck: false });
      } else {
        setStatus('error');
        setErrorMessage(data.message || "Couldn't send your message. Please try again or email me directly.");
      }
    } catch {
      setStatus('error');
      setErrorMessage("Couldn't reach the server. Please try again or email me directly at kumarinish007@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-[#efe7dd] dark:border-[#3e3732] bg-[#fff8f5] dark:bg-[#1e1b18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#e8833a] mb-2 uppercase tracking-wide">
            <span>🐾 Say hello</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
            Say hello
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554338] dark:text-[#a39b93] max-w-2xl leading-relaxed">
            Have a project, a full-time role, or just want to chat? Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#2a2522] rounded-2xl border border-[#efe7dd] dark:border-[#3e3732] p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            {status === 'success' ? (
              <div className="text-center py-10 my-auto space-y-4 animate-fadeIn">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#c5e7d6] text-[#466557] dark:bg-[#466557]/30 dark:text-[#a5d6be] flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f1b18] dark:text-[#f3efea]">
                  Message received!
                </h3>
                <p className="text-sm text-[#554338] dark:text-[#a39b93] max-w-md mx-auto">
                  Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#e8833a] hover:bg-[#d67228] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-6" noValidate>
                {/* Fields container */}
                <div className="space-y-5">
                  {/* Honeypot field for bot protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#1f1b18] dark:text-[#f3efea] mb-1.5"
                    >
                      Your name <span className="text-[#e8833a]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-sm text-[#1f1b18] dark:text-[#f3efea] placeholder-[#554338]/40 dark:placeholder-[#a39b93]/40 focus:border-[#e8833a] focus:ring-2 focus:ring-[#e8833a]/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#1f1b18] dark:text-[#f3efea] mb-1.5"
                    >
                      Email address <span className="text-[#e8833a]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-sm text-[#1f1b18] dark:text-[#f3efea] placeholder-[#554338]/40 dark:placeholder-[#a39b93]/40 focus:border-[#e8833a] focus:ring-2 focus:ring-[#e8833a]/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#1f1b18] dark:text-[#f3efea] mb-1.5"
                    >
                      Message <span className="text-[#e8833a]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me what you're working on..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-sm text-[#1f1b18] dark:text-[#f3efea] placeholder-[#554338]/40 dark:placeholder-[#a39b93]/40 focus:border-[#e8833a] focus:ring-2 focus:ring-[#e8833a]/20 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Banner */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-[#ffdad6]/60 dark:bg-[#ba1a1a]/20 border border-[#ba1a1a]/30 text-[#93000a] dark:text-[#ffdad6] text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </div>

                {/* Submit button at bottom */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#e8833a] hover:bg-[#d67228] disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Direct Contacts Side Card (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#2a2522] rounded-2xl border border-[#efe7dd] dark:border-[#3e3732] p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1f1b18] dark:text-[#f3efea]">
                  Direct contact
                </h3>
                <p className="text-xs text-[#554338] dark:text-[#a39b93] mt-1">
                  Email me directly or find me online
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] space-y-2">
                <div className="text-xs font-mono font-medium text-[#554338] dark:text-[#a39b93] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#e8833a]" />
                  <span>Email address</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#1f1b18] dark:text-[#f3efea] truncate">
                    {myEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] hover:border-[#e8833a]/50 text-[#1f1b18] dark:text-[#f3efea] transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#466557]" />
                        <span className="text-[#466557] font-semibold">Copied!</span>
                      </>
                    ) : copyFailed ? (
                      <span className="text-[#93000a] dark:text-[#ffdad6] font-medium">Failed</span>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#e8833a]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-[#554338] dark:text-[#d5ccc4]">
                <div className="p-2.5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-[#7a9a8b]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                    Location
                  </div>
                  <div className="font-semibold text-[#1f1b18] dark:text-[#f3efea]">
                    Dehradun, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="pt-4 border-t border-[#efe7dd] dark:border-[#3e3732] space-y-3">
              <div className="text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                Links
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/nishakumari19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] hover:border-[#e8833a]/50 text-sm font-medium text-[#1f1b18] dark:text-[#f3efea] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#e8833a]" />
                    <span>GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-[#7a9a8b]">Visit ↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/nisha-kumari-930378226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] hover:border-[#e8833a]/50 text-sm font-medium text-[#1f1b18] dark:text-[#f3efea] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#7a9a8b]" />
                    <span>LinkedIn</span>
                  </div>
                  <span className="text-xs font-mono text-[#7a9a8b]">Connect ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
