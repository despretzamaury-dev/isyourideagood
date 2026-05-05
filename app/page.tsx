"use client";

import { useState } from "react";
import { analyzeIdea } from "./actions";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await analyzeIdea(idea);
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de l'analyse de l'idée.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-custom py-12 flex-1 flex flex-col justify-center min-h-screen">
      <header className="mb-12 text-center mt-auto">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-widest uppercase text-[var(--color-silver)]">
          Intelligence Artificielle d'Évaluation
        </div>
        <h1 className="text-hero text-center mb-6">
          Analyse <span style={{ color: "var(--color-m-blue)" }}>d'Idée</span>
        </h1>
        <p className="text-body text-center" style={{ color: "var(--color-silver)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          Obtenez une analyse objective et brutalement honnête de votre idée de startup. Nous ne passerons pas par quatre chemins.
        </p>
      </header>

      {!result && (
        <div className="card card--featured mx-auto mb-auto w-full" style={{ maxWidth: "700px", padding: "var(--space-8)" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <label htmlFor="idea" className="text-label block mb-3 text-white">
                Décrivez votre idée de startup
              </label>
              <textarea
                id="idea"
                className="input"
                rows={5}
                placeholder="Je veux créer une plateforme qui..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                required
                style={{ resize: "vertical", minHeight: "120px", fontSize: "1.1rem" }}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn btn--primary"
              disabled={loading || !idea.trim()}
              style={{ width: "100%", padding: "var(--space-4)", fontSize: "1rem" }}
            >
              {loading ? "Analyse impitoyable en cours..." : "Analyser l'Idée Maintenant"}
            </button>
            {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md mt-2">
              <p style={{ color: "var(--color-m-red)" }} className="text-sm text-center">{error}</p>
            </div>}
          </form>
        </div>
      )}

      {loading && (
        <div className="text-center py-20 mb-auto">
          <div className="accent-line" style={{ width: "200px", margin: "0 auto" }}></div>
          <p className="text-body mt-6 animate-pulse" style={{ fontSize: "1.1rem" }}>Exécution de l'analyse objective en cours...</p>
        </div>
      )}

      {result && !loading && (
        <div className="fade-in transition-base mb-auto w-full max-w-[1000px] mx-auto">
          <div className="flex gap-6 mb-8 flex-col sm:flex-row">
            <div className="card flex-1 text-center flex flex-col justify-center items-center py-8">
              <h3 className="text-label mb-4" style={{ color: "var(--color-silver)" }}>Note Globale</h3>
              <div className="text-hero leading-none" style={{ fontSize: "5rem", color: result.score100 >= 70 ? "var(--color-m-blue)" : result.score100 >= 40 ? "var(--color-silver)" : "var(--color-m-red)" }}>
                {result.score100}<span className="text-body" style={{ color: "var(--color-platinum)", fontSize: "2rem" }}>/100</span>
              </div>
            </div>
            
            <div className="card flex-1 text-center flex flex-col justify-center items-center py-8">
              <h3 className="text-label mb-4" style={{ color: "var(--color-silver)" }}>Échelle Stricte</h3>
              <div className="text-hero leading-none" style={{ fontSize: "5rem", color: result.score25 >= 18 ? "var(--color-m-violet)" : "var(--color-white)" }}>
                {result.score25}<span className="text-body" style={{ color: "var(--color-platinum)", fontSize: "2rem" }}>/25</span>
              </div>
            </div>
          </div>

          <div className="card card--accent mb-8">
            <h2 className="text-title mb-6 text-white flex items-center gap-3">
              <span className="w-2 h-8 rounded-full" style={{ background: "var(--color-m-red)" }}></span>
              Failles & Risques Potentiels
            </h2>
            <ul className="flex flex-col gap-4">
              {result.flaws?.map((flaw: string, i: number) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/5">
                  <span className="badge badge--red mt-1 shrink-0">Risque</span>
                  <p className="text-body" style={{ color: "var(--color-silver)", lineHeight: "1.7" }}>{flaw}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-8 mb-8 flex-col lg:flex-row">
            <div className="card flex-1">
              <h2 className="text-title mb-4 text-white flex items-center gap-3">
                <span className="w-2 h-6 rounded-full" style={{ background: "var(--color-m-blue)" }}></span>
                Vrai Besoin du Marché
              </h2>
              <p className="text-body" style={{ color: "var(--color-silver)", lineHeight: "1.8" }}>{result.marketNeed}</p>
            </div>
            <div className="card flex-1">
              <h2 className="text-title mb-4 text-white flex items-center gap-3">
                <span className="w-2 h-6 rounded-full" style={{ background: "var(--color-silver)" }}></span>
                Concurrence
              </h2>
              <p className="text-body" style={{ color: "var(--color-silver)", lineHeight: "1.8" }}>{result.competition}</p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-title mb-6 text-white flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-white"></span>
              Roadmap MVP - 2 Semaines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.roadmap?.map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-4 p-5" style={{ background: "rgba(0,0,0,0.3)", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="badge badge--blue shrink-0" style={{ minWidth: "80px", justifyContent: "center" }}>{item.day}</div>
                  <p className="text-body text-white/90">{item.task}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" style={{ borderTop: "2px solid var(--color-m-violet)" }}>
            <h2 className="text-title mb-6 text-white flex items-center gap-3">
              <span className="w-2 h-8 rounded-full" style={{ background: "var(--color-m-violet)" }}></span>
              Idées de Branding
            </h2>
            <div className="flex flex-wrap gap-4">
              {result.branding?.map((brand: string, i: number) => (
                <div key={i} className="badge badge--violet" style={{ fontSize: "var(--text-sm)", padding: "var(--space-3) var(--space-5)" }}>
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pb-12">
            <button className="btn btn--ghost" onClick={() => setResult(null)} style={{ padding: "var(--space-4) var(--space-8)", fontSize: "1rem" }}>
              Analyser une autre idée
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
