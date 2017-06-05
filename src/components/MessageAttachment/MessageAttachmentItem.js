/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer, Message } from '@dlghq/dialog-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Markdown from '../Markdown/Markdown';
import getInlineText from '../SidebarRecentItem/utils/getInlineText';
import decorators from '../SidebarRecentItem/utils/decorators';
import Icon from '../Icon/Icon';
import MessageContent from '../MessageContent/MessageContent';
import styles from './MessageAttachment.css';

type Props = {
  className?: string,
  type: 'forward' | 'reply',
  message: Message,
  short: boolean,
  onGoToPeer: (peer: Peer) => any,
  onGoToMessage: (message: Message) => any,
  maxHeight: number,
  maxWidth: number
}

class MessageAttachmentItem extends Component {
  props: Props;

  handleGoToPeer = (event: SyntheticEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.message.sender) {
      this.props.onGoToPeer(this.props.message.sender.peer);
    }
  };

  handleGoToMessage = (): void => {
    this.props.onGoToMessage(this.props.message);
  };

  renderHeader(): ?React.Element<any> {
    const { message: { sender }, short, type } = this.props;

    if (short || !sender) {
      return null;
    }

    return (
      <header className={styles.header}>
        <span>
          <Icon glyph={type} size={20} className={styles.icon} />
          <span className={styles.name} onClick={this.handleGoToPeer}>{sender.title + ' '}</span>
          {sender.userName ? (
            <span className={styles.nick} onClick={this.handleGoToPeer}>{`@${sender.userName}`}</span>
          ) : null}
          {type === 'reply' ? this.renderTimestamp() : null}
        </span>
      </header>
    );
  }

  renderTimestamp(): React.Element<any> {
    const { message } = this.props;

    return (
      <time className={styles.time} dateTime={message.fullDate.toISOString()}>{message.date}</time>
    );
  }

  renderContent() {
    const { message: { content, rid }, type, maxWidth, maxHeight } = this.props;
    const messageClassName = classNames(styles.message, {
      [styles.reply]: type === 'reply'
    });

    switch (type) {
      case 'reply':
        if (content.type === 'text') {
          return (
            <Markdown
              className={messageClassName}
              inline
              text={getInlineText(content.text)}
              decorators={decorators}
              emojiSize={16}
            />
          );
        }

        return (
          <MessageContent
            className={messageClassName}
            content={content}
            rid={rid}
            maxWidth={100}
            maxHeight={100}
          />
        );

      case 'forward':
        return (
          <MessageContent
            className={messageClassName}
            content={content}
            rid={rid}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
          />
        );

      default:
        return null;
    }
  }

  render(): React.Element<any> {
    const { short, type } = this.props;

    const className = classNames(styles.itemContainer, {
      [styles.short]: short
    }, this.props.className);

    return (
      <div className={className} onClick={this.handleGoToMessage}>
        {this.renderHeader()}
        <div className={styles.content}>
          {this.renderContent()}
          {type === 'forward' ? (
            <div className={styles.timeWrapper}>{this.renderTimestamp()}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MessageAttachmentItem;
