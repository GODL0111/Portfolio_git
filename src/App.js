import React, { useState } from 'react';

const scifiColors = {
  bg: "linear-gradient(135deg, #0f2027, #2c5364 70%, #00c3ff 100%)",
  accent: "#00fff7",
  text: "#e0e7ef",
  cardBg: "rgba(34, 46, 80, 0.85)",
  shadow: "0 0 40px #00fff7, 0 0 10px #2c5364"
};

const projects = [
  { name: "Song Virality Predictor", url: "https://github.com/GODL0111/Song_virality_predict", desc: "Predicts how viral a song will be using ML and social metrics." },
  { name: "RT-Map", url: "https://github.com/GODL0111/RT-Map", desc: "Real-time collaborative map annotation and sharing." },
  { name: "Emotional Support", url: "https://github.com/GODL0111/Emotinonal_spprt", desc: "AI-powered emotional support chatbot and mood tracker." },
  { name: "GTtimeline", url: "https://github.com/GODL0111/GTtimeline", desc: "Generates beautiful timelines from your data." }
];

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "UI/UX", icon: "🎨" },
  { name: "API Design", icon: "🔗" },
  { name: "Git/GitHub", icon: "🐙" }
];

const testimonials = [
  {
    author: "Jane Doe",
    feedback: "Arin's work on RT-Map was futuristic and robust. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    author: "John Smith",
    feedback: "Song Virality Predictor helped our label forecast trends. Sci-fi level stuff!",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [theme, setTheme] = useState("scifi");
  const [messageSent, setMessageSent] = useState(false);

  // Contact form simple handler
  function handleContactSubmit(e) {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      setShowContact(false);
      setMessageSent(false);
    }, 2000);
  }

  // Theme switching
  const themes = {
    scifi: scifiColors,
    dark: {
      ...scifiColors,
      bg: "linear-gradient(135deg, #141414, #232526 80%, #636363 100%)",
      accent: "#00e0c6",
      cardBg: "rgba(34,34,34,0.9)",
      shadow: "0 0 30px #00e0c6, 0 0 10px #232526"
    }
  };

  const activeTheme = themes[theme];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: activeTheme.bg,
        color: activeTheme.text,
        fontFamily: "'Orbitron', 'Montserrat', 'Arial', sans-serif",
        padding: "0",
        margin: "0"
      }}
    >
      {/* Sci-fi header with theme switch */}
      <header style={{
        padding: "2rem 0 1rem 0",
        textAlign: "center",
        fontSize: "2.5rem",
        letterSpacing: "0.2em",
        color: activeTheme.accent,
        textShadow: activeTheme.shadow,
        fontWeight: "bold",
        position: "relative"
      }}>
        ARIN'S SCIFI PORTFOLIO
        <button
          onClick={() => setTheme(theme === "scifi" ? "dark" : "scifi")}
          style={{
            position: "absolute",
            right: "2rem",
            top: "2rem",
            background: activeTheme.cardBg,
            color: activeTheme.accent,
            border: `2px solid ${activeTheme.accent}`,
            borderRadius: "1rem",
            padding: "0.5rem 1.2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 0 7px " + activeTheme.accent
          }}
        >
          {theme === "scifi" ? "Dark Mode" : "Sci-fi Mode"}
        </button>
      </header>

      {/* Animated Skills */}
      <section style={{
        textAlign: "center",
        marginBottom: "2rem"
      }}>
        <h2 style={{
          color: activeTheme.accent,
          fontSize: "1.5rem",
          textShadow: "0 0 8px " + activeTheme.accent,
          marginBottom: "1rem"
        }}>
          Skills & Technologies
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem"
        }}>
          {skills.map(s => (
            <div key={s.name} style={{
              background: activeTheme.cardBg,
              color: activeTheme.accent,
              borderRadius: "1rem",
              padding: "1rem 1.7rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
              boxShadow: activeTheme.shadow,
              transition: "transform .2s",
              marginBottom: "0.5rem"
            }}>
              <span style={{ fontSize: "1.7rem", marginRight: "0.5rem" }}>{s.icon}</span> {s.name}
            </div>
          ))}
        </div>
      </section>

      {/* Project Cards */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2.5rem",
        margin: "2rem auto",
        maxWidth: "900px"
      }}>
        {projects.map(project => (
          <div
            key={project.name}
            style={{
              background: activeTheme.cardBg,
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: activeTheme.shadow,
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              border: `2px solid ${activeTheme.accent}`,
              width: "250px",
              textAlign: "center",
              position: "relative"
            }}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1.0)"}
          >
            <h2 style={{
              color: activeTheme.accent,
              marginBottom: "1rem",
              fontSize: "1.3rem",
              fontWeight: "600",
              textShadow: "0 0 8px " + activeTheme.accent
            }}>
              {project.name}
            </h2>
            <div style={{
              fontSize: "1rem",
              opacity: "0.85",
              marginBottom: "0.9rem"
            }}>{project.desc}</div>
            <span style={{
              fontSize: "1rem",
              opacity: "0.8"
            }}>Click to explore</span>
          </div>
        ))}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.1)",
            background: activeTheme.cardBg,
            borderRadius: "2rem",
            boxShadow: "0 0 50px " + activeTheme.accent + ", 0 0 20px #2c5364",
            padding: "3rem 2rem",
            zIndex: 99,
            minWidth: "320px",
            textAlign: "center",
            animation: "fade-in 0.3s"
          }}
        >
          <h2 style={{
            color: activeTheme.accent,
            fontSize: "2rem",
            marginBottom: "1.5rem"
          }}>
            {selectedProject.name}
          </h2>
          <div style={{ marginBottom: "1.2rem", color: activeTheme.text }}>{selectedProject.desc}</div>
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: activeTheme.accent,
              color: "#141a2a",
              padding: "0.9rem 2rem",
              borderRadius: "1rem",
              fontWeight: "600",
              fontSize: "1.1rem",
              textDecoration: "none",
              boxShadow: "0 0 18px " + activeTheme.accent
            }}
          >
            View on GitHub
          </a>
          <br />
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              marginTop: "2rem",
              background: "none",
              border: `2px solid ${activeTheme.accent}`,
              color: activeTheme.accent,
              padding: "0.7rem 1.5rem",
              borderRadius: "1rem",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 0 8px " + activeTheme.accent
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Testimonials */}
      <section style={{
        marginTop: "3rem",
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        <h2 style={{
          color: activeTheme.accent,
          fontSize: "1.5rem",
          marginBottom: "1rem",
          textShadow: "0 0 8px " + activeTheme.accent
        }}>Testimonials</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem"
        }}>
          {testimonials.map(t => (
            <div key={t.author} style={{
              background: activeTheme.cardBg,
              borderRadius: "1rem",
              padding: "1.5rem 2rem",
              boxShadow: activeTheme.shadow,
              width: "320px",
              display: "flex",
              alignItems: "center",
              gap: "1.2rem"
            }}>
              <img src={t.avatar} alt={t.author} style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                boxShadow: "0 0 12px " + activeTheme.accent
              }} />
              <div style={{ textAlign: "left" }}>
                <div style={{
                  fontStyle: "italic",
                  marginBottom: "0.7rem",
                  color: activeTheme.text
                }}>{t.feedback}</div>
                <div style={{
                  color: activeTheme.accent,
                  fontWeight: "bold"
                }}>— {t.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Button and Modal */}
      <div style={{ textAlign: "center", margin: "2rem 0 4rem 0" }}>
        <button
          onClick={() => setShowContact(true)}
          style={{
            background: activeTheme.accent,
            color: "#141a2a",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            fontWeight: "600",
            fontSize: "1.2rem",
            border: "none",
            boxShadow: "0 0 12px " + activeTheme.accent,
            cursor: "pointer"
          }}
        >
          Contact Me
        </button>
      </div>

      {showContact && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: activeTheme.cardBg,
            borderRadius: "1.5rem",
            boxShadow: "0 0 36px " + activeTheme.accent,
            padding: "2.5rem 2rem",
            zIndex: 99,
            minWidth: "310px",
            textAlign: "center",
            animation: "fade-in 0.3s"
          }}
        >
          <h2 style={{
            color: activeTheme.accent,
            fontSize: "1.5rem",
            marginBottom: "1.2rem"
          }}>Contact Arin</h2>
          {messageSent ? (
            <div style={{ color: activeTheme.accent, fontWeight: "bold" }}>Message sent! 🚀</div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{
                  width: "80%",
                  marginBottom: "1rem",
                  padding: "0.7rem",
                  borderRadius: "0.7rem",
                  border: `1px solid ${activeTheme.accent}`,
                  background: "rgba(0,0,0,0.12)",
                  color: activeTheme.text
                }}
              /><br />
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{
                  width: "80%",
                  marginBottom: "1rem",
                  padding: "0.7rem",
                  borderRadius: "0.7rem",
                  border: `1px solid ${activeTheme.accent}`,
                  background: "rgba(0,0,0,0.12)",
                  color: activeTheme.text
                }}
              /><br />
              <textarea
                placeholder="Your message..."
                required
                rows={3}
                style={{
                  width: "80%",
                  marginBottom: "1rem",
                  padding: "0.7rem",
                  borderRadius: "0.7rem",
                  border: `1px solid ${activeTheme.accent}`,
                  background: "rgba(0,0,0,0.12)",
                  color: activeTheme.text
                }}
              /><br />
              <button
                type="submit"
                style={{
                  background: activeTheme.accent,
                  color: "#141a2a",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "1rem",
                  fontWeight: "600",
                  fontSize: "1rem",
                  border: "none",
                  boxShadow: "0 0 8px " + activeTheme.accent,
                  cursor: "pointer"
                }}
              >Send</button>
            </form>
          )}
          <br />
          <button
            onClick={() => setShowContact(false)}
            style={{
              marginTop: "1rem",
              background: "none",
              border: `2px solid ${activeTheme.accent}`,
              color: activeTheme.accent,
              padding: "0.7rem 1.5rem",
              borderRadius: "1rem",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 0 8px " + activeTheme.accent
            }}
          >Close</button>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "monospace",
        fontSize: "1rem",
        color: "#7fffd4",
        letterSpacing: "0.1em",
        background: "rgba(17, 34, 51, 0.7)"
      }}>
        <span>Made by Arin | {new Date().getFullYear()} | <a href="https://github.com/GODL0111" style={{ color: activeTheme.accent }}>GitHub</a></span>
      </footer>

      {/* Global Styles and Animations */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Montserrat:wght@400;600&display=swap');
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        body {
          margin: 0;
          padding: 0;
          background: ${activeTheme.bg} !important;
        }
        `}
      </style>
    </div>
  );
}

export default App;