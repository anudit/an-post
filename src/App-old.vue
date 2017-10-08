<template>
  <div id="app">
    <md-sidenav class="md-left md-fixed" ref="sidebar" md-theme="orange">
    <md-toolbar class="md-account-header" md-theme="orange">
      <md-list class="md-transparent">
        <md-list-item class="md-avatar-list">
          <md-avatar class="md-large">
            <img src="https://placeimg.com/64/64/people/8" alt="People">
          </md-avatar>

          <span style="flex: 1"></span>
        </md-list-item>

        <md-list-item>
          <div class="md-list-text-container">
            <span>John Doe</span>
            <span>johndoe@email.com</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-toolbar>

    <md-list>
      <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
        <md-icon>insert_drive_file</md-icon> <span>My files</span>
      </md-list-item>
      <md-list-item @click="$refs.sidebar.toggle()">
        <md-icon>people</md-icon> <span>Shared with me</span>
      </md-list-item>
      <md-list-item @click="$refs.sidebar.toggle()">
        <md-icon>access_time</md-icon> <span>Recent</span>
      </md-list-item>
      <md-list-item @click="$refs.sidebar.toggle()">
        <md-icon>start</md-icon> <span>Starred</span>
      </md-list-item>
      <md-list-item @click="$refs.sidebar.toggle()">
        <md-icon>delete</md-icon> <span>Trash</span>
      </md-list-item>
    </md-list>
  </md-sidenav>

  <md-whiteframe md-elevation="3" class="main-toolbar">
    <md-toolbar md-theme="orange">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
        <span style="flex: 1"></span>
        <h2 class="md-title">My Files</h2>
        <span style="flex: 1"></span>
        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  </md-whiteframe>
  <main class="main-content">
    <main class="mc">
      <md-layout md-column md-gutter md-align="center" style="align-items:center;max-width:500px;">
      <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50" style="padding-bottom:10px;" v-for="post in posts" :key="post.key">
        <md-card md-with-hover md-elevation="2" md-align="center">

          <md-card-header>
              <md-card-header-text>
                <div class="md-title" style="color:black;">{{post.title}}</div>
                <div class="md-subhead">&nbsp;&nbsp;&nbsp;&nbsp;{{post.user}}</div>
              </md-card-header-text>

              <md-menu md-size="2" md-direction="bottom left">
                <md-button class="md-icon-button" md-menu-trigger>
                  <md-icon>more_vert</md-icon>
                </md-button>

                <md-menu-content>
                  <md-menu-item target="_blank" :href="post.imgurl">
                    <span>Save</span>
                    <md-icon>save</md-icon>
                  </md-menu-item>

                  <md-menu-item>
                    <span>Share</span>
                    <md-icon>share</md-icon>
                  </md-menu-item>
                </md-menu-content>
              </md-menu>
            </md-card-header>

          <md-card-media>
            <img v-bind:src="post.imgurl" alt="Peopl">
          </md-card-media>

          <md-card-content>
            <md-chip>{{post.tag1}}</md-chip>
            <md-chip>{{post.tag2}}</md-chip>
            <md-chip>{{post.tag3}}</md-chip>
            <br><br>
            {{post.content}}
          </md-list-item>
            <md-card-expand>
              <md-card-actions>
                <div class="md-subhead" md-align="center" ><md-icon>whatshot</md-icon>&nbsp;&nbsp;&nbsp;View Top Comments</div>
                <span style="flex: 1"></span>
                <md-button class="md-icon-button" md-expand-trigger>
                  <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
              </md-card-actions>
              <md-card-content>
                <md-list class="custom-list md-triple-line">
                 <md-list-item v-for="com in post.topcom" :key="com.user">
                   <md-avatar>
                     <img :src="com.profileurl" alt="People">
                   </md-avatar>

                   <div class="md-list-text-container">
                     <span>{{com.user}}</span>
                     <span>@{{com.user}}</span>
                     <p>{{com.comment}}</p>
                   </div>

                   <md-button class="md-icon-button md-list-action">
                     <md-icon class="md-primary">star</md-icon>
                   </md-button>

                   <md-divider class="md-inset"></md-divider>
                 </md-list-item>

               </md-list>
              </md-card-content>
          </md-card-expand>
          </md-card-content>

        </md-card>
      </md-layout>
      </md-layout>
    </main>
  </main>

  <div class="phone-viewport">
    <md-bottom-bar md-theme="orange">
      <md-bottom-bar-item md-icon="all_inclusive">Fresh</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="trending_up"  md-active>Trending</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="send">Post</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
 </div>
</template>

<script>


export default {
  name: 'app',
  data: function(){
    return {
      "posts":[  
        {
          "title":"This is a title",
          "user":"username",
          "imgurl":"https://pbs.twimg.com/media/BWkFYB_CcAAhdyL.png",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "key":"9218",
          "tag1":"tag1",
          "tag2":"tag2",
          "tag3":"tag3",
          "topcom":[
            {
              "user":"Andy",
              "comment":"hi this is a comment",
              "profileurl":"https://placeimg.com/40/40/people/1"
            },
            {
              "user":"Andy",
              "comment":"hi this is a comment",
              "profileurl":"https://placeimg.com/40/40/people/2"
            }
          ]
        },
        {
          "title":"This is a title",
          "user":"username",
          "imgurl":"https://pbs.twimg.com/media/BWkFYB_CcAAhdyL.png",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "key":"9418",
          "tag1":"tag1",
          "tag2":"tag2",
          "tag3":"tag3",
          "topcom":[
            {
              "user":"Andy",
              "comment":"hi this is a comment",
              "profileurl":"https://placeimg.com/40/40/people/1"
            },
            {
              "user":"Andy",
              "comment":"hi this is a comment",
              "profileurl":"https://placeimg.com/40/40/people/2"
            }
          ]
        }
      ]
      }
  }
}
</script>

<style>
#app {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
}

html,
body {
  height: 100%;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

.main-toolbar {
  position: relative;
  z-index: 10;
}

.md-title {
  padding-left: 8px;
  color: #fff;
}

.main-content {
  position: relative;
  z-index: 1;
  overflow: auto;
}
.pos {
  margin-bottom: 50px;
}
.mc {
  align-items:center;
  margin-top:10px;
  margin-right:5%;
  margin-left:5%;
  display: flex;
  flex-flow: column;
}
</style>
