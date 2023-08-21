-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

vim.g.mapleader = " "

local map = vim.keymap.set

map("i","jk","<ESC>")

map("n","<leader>nh",":nohl<CR>")

map("n", "x", "_x")

map("n","<leader>]","<C-a>")
map("n","<leader>[","<C-x>")

map("n","<leader>sv", "<C-w>v") --split windows vertically
map("n","<leader>sh","<C-w>s") --split windos horizontally
map("n","<leader>se","<C-w>=") --make split windows equal width
map("n","<leader>sx",":close<CR>") --close current split window

map("n","<leader>to",":tabnew<CR>") --open new tab
map("n","<leader>tx",":tabclose<CR>") --close current tab
map("n","<leader>tn",":tabn<CR>") --go to tabnext
map("n","<leader>tp",":tabp<CR>") --go to previous tab

map("n","<leader>e",":Neotree<CR>") --open neotree


map({ "i", "v", "n", "s" }, "<C-s>", "<cmd>w<cr><esc>", { desc = "Save file" }) --save file
