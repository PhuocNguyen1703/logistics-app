import React from 'react';
import classNames from 'classnames/bind';
import { BsTrash, BsPlus, BsJournal, BsCheck2, BsExclamationLg, BsFillRecordFill, BsRecord } from 'react-icons/bs';

import styles from './Todo.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import { useDispatch } from 'react-redux';
import { setTodoInfoModalIsOpen } from '~/redux/Slice/modalSlice';
import { useSelector } from 'react-redux';
import TodoInfo from '~/components/Modal/TodoInfo';
import Modal from '~/components/Modal';
import { setSelectedTodoItem } from '~/redux/Slice/todoSlice';

const cx = classNames.bind(styles);

function Todo() {
    const { todoInfoModalIsOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsJournal />, title: 'My Tasks', path: '/todo' },
        { icon: <BsExclamationLg />, title: 'Important', path: '/sent' },
        { icon: <BsCheck2 />, title: 'Completed', path: '/title' },
        { icon: <BsTrash />, title: 'Deleted', path: '/deleted' },
    ];

    const tags = [
        { icon: <BsRecord />, color: '#349eff', title: 'Team', path: '/company' },
        { icon: <BsRecord />, color: 'forestgreen', title: 'Low', path: '/important' },
        { icon: <BsRecord />, color: 'orange', title: 'Medium', path: '/important' },
        { icon: <BsRecord />, color: 'red', title: 'Hight', path: '/important' },
    ];

    const todo = [
        {
            title: 'How are you today ? How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['hight', 'team'],
            completed: false,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: [],
            completed: false,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['low'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['medium', 'team'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: [],
            completed: false,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['hight'],
            completed: false,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['team'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['hight', 'team'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: [],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['low'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['medium', 'team'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: [],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['hight'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['team'],
            completed: true,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: ['hight', 'team'],
            completed: false,
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: [],
            completed: true,
            createdAt: 'Feb 22',
        },
    ];

    const getStyleColor = (type) => {
        if (type === 'team') return '#349eff';
        if (type === 'low') return 'forestgreen';
        if (type === 'medium') return 'orange';
        return 'red';
    };

    const handleSelectedTodoItem = (item) => {
        dispatch(setSelectedTodoItem(item));
        dispatch(setTodoInfoModalIsOpen(true));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <button className={cx('create-task')}>
                    <BsPlus />
                    Create Task
                </button>
                {menu.map((item, index) => (
                    <SidebarItem key={index} item={item} className={'menu-item'} />
                ))}
                <span className={cx('tags')}>Tags</span>
                {tags.map((item, index) => (
                    <SidebarItem key={index} item={item} className={'tags-item'} />
                ))}
            </div>
            <div className={cx('content')}>
                {todo.map((item, index) => (
                    <div key={index} className={cx('todo-item')} onClick={() => handleSelectedTodoItem(item)}>
                        <div className={cx('item-content')}>
                            <input type="checkbox" />
                            <span className={cx('item-title')}>{item.title}</span>
                        </div>
                        <div className={cx('date')}>
                            {item.type?.map((type, idx) => (
                                <BsFillRecordFill key={idx} style={{ color: getStyleColor(type) }} />
                            ))}
                            <span>{item.createdAt}</span>
                        </div>
                    </div>
                ))}
            </div>

            {todoInfoModalIsOpen && (
                <Modal>
                    <TodoInfo />
                </Modal>
            )}
        </div>
    );
}

export default Todo;
