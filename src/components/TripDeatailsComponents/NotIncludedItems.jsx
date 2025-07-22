export default function NotIncludedItems({ notIncludedText }) {
  return (
    <section className="bg-background p-4 rounded-lg shadow-sm mb-4 text-left border border-gray-200 dark:border-blue-900 dark:shadow-[0_4px_32px_0_rgba(0,40,120,0.25)]">
      <h2 className="text-xl font-semibold text-text-primary mb-2">
        Price Does Not Include:
      </h2>
      {notIncludedText ? (
        <ul className="list-disc pl-6 text-text-hard-secondary space-y-1">
          {notIncludedText
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      ) : (
        <p className="text-gray-500">No excluded items found.</p>
      )}
    </section>
  );
}
