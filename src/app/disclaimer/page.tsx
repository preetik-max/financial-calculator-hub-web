export const metadata = {
  title: "Disclaimer | Finora Labs",
  description:
    "Financial and general disclaimer for Financial Calculator Hub by Finora Labs.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Disclaimer</h1>

      <p className="mt-4 text-sm text-gray-500">
        Last updated: October 2, 2026
      </p>

      <div className="mt-8 space-y-8 leading-7 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            1. General Information
          </h2>
          <p className="mt-3">
            Financial Calculator Hub is operated by Finora Labs and provides
            financial calculators, educational information, and general
            financial resources.
          </p>
          <p className="mt-3">
            The information provided on this website is for general
            informational and educational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            2. Not Financial Advice
          </h2>
          <p className="mt-3">
            The calculators, articles, examples, estimates, and other
            information available on this website should not be considered
            financial, investment, tax, legal, accounting, or professional
            advice.
          </p>
          <p className="mt-3">
            You should consider your own financial circumstances and consult
            an appropriately qualified professional before making financial
            decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            3. Calculator Results
          </h2>
          <p className="mt-3">
            Calculator results are estimates based on the information and
            assumptions entered by the user. Actual results may differ due
            to interest rates, taxes, fees, charges, market conditions,
            lender policies, investment performance, and other factors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            4. Investments and Markets
          </h2>
          <p className="mt-3">
            Past performance does not guarantee future results. Any
            investment-related information should be independently verified
            before making an investment decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            5. Loans and Financial Products
          </h2>
          <p className="mt-3">
            Information about loans, credit cards, banks, lenders, and other
            financial products is provided for informational purposes.
          </p>
          <p className="mt-3">
            Product availability, interest rates, fees, eligibility,
            approval decisions, and terms are determined by the relevant
            financial institution or service provider.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            6. Accuracy of Information
          </h2>
          <p className="mt-3">
            We make reasonable efforts to provide useful and accurate
            information, but we do not guarantee that all information is
            complete, current, or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            7. External Websites
          </h2>
          <p className="mt-3">
            Links to third-party websites are provided for convenience.
            Finora Labs does not control and is not responsible for the
            content, availability, privacy practices, or services of
            external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            8. Acceptance
          </h2>
          <p className="mt-3">
            By using Financial Calculator Hub, you acknowledge that you
            understand and agree that the information and calculations are
            provided for general informational purposes.
          </p>
        </section>
      </div>
    </main>
  );
}
