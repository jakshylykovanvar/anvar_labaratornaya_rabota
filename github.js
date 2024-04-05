// URL репозитория на GitHub, который мы будем запрашивать
const repoUrl =
  "https://api.github.com/repos/jakshylykovanvar/anvar_labaratornaya_rabota";

// Функция для получения информации о репозитории с использованием Fetch API
async function getRepositoryInfo(owner, repo) {
  // Заменяем плейсхолдеры :owner и :repo в URL на соответствующие значения
  const url = repoUrl.replace(":owner", owner).replace(":repo", repo);

  try {
    // Отправляем GET-запрос к API
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0", // GitHub требует указать заголовок User-Agent
        Accept: "application/vnd.github.v3+json", // Указываем, что ожидаем данные в формате JSON
      },
    });

    // Проверяем статус ответа
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    // Получаем данные в формате JSON
    const repository = await response.json();
    console.log("Repository Info:", repository);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Пример использования функции
getRepositoryInfo("octocat", "hello-world");
