const FILTERS = ['all', 'active', 'completed']

function FilterBar({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}) {
  return (
    <div className="filter-bar">
      <span>
        {activeCount} item{activeCount === 1 ? '' : 's'} left
      </span>
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          disabled={filter === f}
        >
          {f}
        </button>
      ))}
      <button onClick={onClearCompleted} disabled={completedCount === 0}>
        Clear completed ({completedCount})
      </button>
    </div>
  )
}

export default FilterBar
