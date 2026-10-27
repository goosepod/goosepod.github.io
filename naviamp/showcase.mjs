// Progressive enhancement: without JavaScript, every layout and caption remains visible.
export function initializeShowcase(root) {
  const tablist = root.querySelector('.showcase-tabs');
  const tabs = Array.from(root.querySelectorAll('[data-view]'));
  const panels = Array.from(root.querySelectorAll('[data-panel]'));
  if (!tablist || !tabs.length || tabs.length !== panels.length ||
      tabs.some(tab => !panels.some(panel => panel.dataset.panel === tab.dataset.view))) return;
  tablist.setAttribute('role', 'tablist');
  tablist.hidden = false;
  function select(index, focus = false) {
    tabs.forEach((tab, position) => {
      const active = position === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels.find(panel => panel.dataset.panel === tab.dataset.view).hidden = !active;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    const panel = panels.find(panel => panel.dataset.panel === tab.dataset.view);
    tab.id = `tab-${tab.dataset.view}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', event => {
      const target = { ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index - 1 + tabs.length) % tabs.length,
        Home: 0, End: tabs.length - 1 }[event.key];
      if (target === undefined) return;
      event.preventDefault();
      select(target, true);
    });
  });
  select(0);
}
if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-showcase]').forEach(initializeShowcase);
}
