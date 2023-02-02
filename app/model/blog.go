package model

// Article structure for our blog
type Article struct {
	ID      uint64 `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

func GetAllPosts() ([]Article, error) {
	var articles []Article

	query := `select id, title, content from posts;`

	rows, err := db.Query(query)
	if err != nil {
		return articles, err
	}

	defer rows.Close()

	for rows.Next() {
		var id uint64
		var title, content string

		err := rows.Scan(&id, &title, &content)
		if err != nil {
			return articles, err
		}

		article := Article{
			ID:      id,
			Title:   title,
			Content: content,
		}

		articles = append(articles, article)
	}

	return articles, nil
}

func GetPost(id uint64) (Article, error) {
	var article Article

	query := `select title, content from posts where id=$1`
	row, err := db.Query(query, id)
	if err != nil {
		return article, err
	}

	defer row.Close()

	if row.Next() {
		var title, content string

		err := row.Scan(&title, &content)
		if err != nil {
			return article, err
		}

		article = Article{
			ID:      id,
			Title:   title,
			Content: content,
		}
	}

	return article, nil
}

func CreatePost(post Article) error {

	query := `insert into posts(title, content) values($1, $2);`

	_, err := db.Exec(query, post.Title, post.Content)

	if err != nil {
		return err
	}

	return nil
}

func UpdatePost(post Article) error {

	query := `update posts set title=$1, content=$2 where id=$3;`

	_, err := db.Exec(query, post.Title, post.Content, post.ID)
	if err != nil {
		return err
	}
	return nil
}

func DeletePost(id uint64) error {
	query := `delete from posts where id=$1;`
	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}
