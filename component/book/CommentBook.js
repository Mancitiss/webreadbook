import { Comment, List, Tooltip, Avatar, Button, Form, Input } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import LogoLogin from '../../assets/images/logo-login.png'
const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
    //   header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
export default function CommentBook(){
      const [comments, setComments] = useState([]);
      const [submitting, setSubmitting] = useState(false);
      const [value, setValue] = useState('');
      const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          setValue('');
          setComments([
            ...comments,
            {
              author: 'Han Solo',
              avatar: 'https://vcdn.subiz-cdn.com/file/firayzsbdxnjqgkkkksm-photo_2021_02_18_17_37_21.jpg',
              content: <p>{value}</p>,
              datetime: moment('2016-11-22').fromNow(),
            },
          ]);
        }, 1000);
      };
      const handleChange = (e) => {
        setValue(e.target.value);
      };
    const data = [
        {
        //   actions: [<span key="comment-list-reply-to-0">Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://vcdn.subiz-cdn.com/file/firayzsbdxnjqgkkkksm-photo_2021_02_18_17_37_21.jpg',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip title="2016-11-22 11:22:33">
              <span>8 hours ago</span>
            </Tooltip>
          ),
        },
    ]
    return(
        <div>
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                <Editor
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    value={value}
                />
                }
            />
             <List
                className="comment-list"
                header={`${data.length +comments.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <li>
                    {comments.length  > 0 && <CommentList comments={comments} />}
                    <Comment
                    // actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    />
                </li>
                )}
            />
        </div>
    )
}