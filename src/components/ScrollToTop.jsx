import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Получаем данные о текущем пути (URL)
  const { pathname } = useLocation();

  useEffect(() => {
    // Как только путь меняется, скроллим окно в самый верх
    window.scrollTo(0, 0);
  }, [pathname]); // Зависимость от pathname заставляет эффект срабатывать при каждом переходе

  return null; // Компонент ничего не рендерит, он просто выполняет логику
};

export default ScrollToTop;