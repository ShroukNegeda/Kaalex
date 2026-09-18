"use client";

import { useState } from "react";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";

export function ServicesGoalGuide() {
  const { t } = useLanguage();
  const g = t.services.goalGuide;
  const [activeGoalIndex, setActiveGoalIndex] = useState(0);

  const currentGoal = g.goals[activeGoalIndex] ?? g.goals[0];

  return (
    <section className="border-b border-border bg-bg-elevated py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {g.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-muted">
            {g.desc}
          </p>
        </div>

        {/* Goal Selection Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {g.goals.map((goal, index) => (
            <button
              key={goal.id}
              type="button"
              onClick={() => setActiveGoalIndex(index)}
              className={clsx(
                "rounded-full px-5 py-2 text-xs font-semibold transition-colors duration-150 sm:text-sm",
                activeGoalIndex === index
                  ? "bg-accent text-accent-contrast shadow-sm"
                  : "border border-border bg-surface text-text-muted hover:border-text-faint hover:text-text"
              )}
            >
              {goal.label}
            </button>
          ))}
        </div>

        {/* 3 Outcome & Step Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {/* Card 1: Service / Scenario */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                {currentGoal.serviceTag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text sm:text-xl">
                {currentGoal.serviceTitle}
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-text-faint">
              01
            </div>
          </div>

          {/* Card 2: Next Step */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                {currentGoal.stepTag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text sm:text-xl">
                {currentGoal.stepTitle}
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-text-faint">
              02
            </div>
          </div>

          {/* Card 3: Outcome */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                {currentGoal.outcomeTag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text sm:text-xl">
                {currentGoal.outcomeTitle}
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-text-faint">
              03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
