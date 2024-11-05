export const Card = ({ class: elemClass, group, comments, intensity, range }: SearchResult) => {
  return (
    <div className="border-accent rounded-xl border p-4 w-96">
      <div>Класс: {elemClass}</div>
      <div>Группа: {group}</div>
      <div>Диапазон: {range}</div>
      <div>Интенсивность: {intensity}</div>
      <div>Комментарий: {comments}</div>
    </div>
  );
};